import React, {Component} from 'react';
import {connect} from 'react-redux'
import Field from './Field';
import axios from 'axios';
import FormData from 'form-data'
import * as actions from '../actions'
import validator from 'validator'

class From extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        // Test Regex and Validation
        var valid = true;

        this.state = {
            errors: []
        }
        valid = validator.isURL(this.props.action); //=> true
        if (!valid) {
            this.setState({
                errors: [...this.state.errors, "the URL is not valid"]
            })
        } else {
            for (var i = 0; i < this.props.configurations.length; i++) {
                var configuration = this.props.configurations[i]
                if (configuration.value) {
                    if (configuration.type === 'text') {
                        var term = configuration.value;
                        var re = new RegExp(configuration.regex);
                        valid = re.test(term)
                        if (!valid) {
                            this.setState({
                                errors: [...this.state.errors, configuration.label + " is not respect the format " + configuration.regex]
                            })
                            break;
                        }
                    } else if (configuration.type === 'email') {
                        valid = validator.isEmail(configuration.value); //=> true
                        if (!valid) {
                            this.setState({
                                errors: [...this.state.errors, configuration.label + " is not an email"]
                            })
                            break;
                        }
                    } else if (configuration.type === 'number') {
                        valid = validator.isNumeric(configuration.value); //=> true
                        if (!valid) {
                            this.setState({
                                errors: [...this.state.errors, configuration.label + " is not a number"]
                            })
                            break;
                        }
                    }

                } else if (configuration.required) {
                    valid = false
                    this.setState({
                        errors: [...this.state.errors, configuration.label + " is empty"]
                    })
                    break;
                }
            }

        }


        if (!valid)
            return false

        var form = new FormData()
        this.props.configurations.map(
            (configuration) => {
                form.append(configuration.name, configuration.value)
            }
        )
        console.log(this.props)

        axios({
            method: this.props.method,
            url: this.props.action,
            data: form,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function (response) {
            console.log(response)
            alert('success')
            document.querySelector("form").reset();

        }).catch(function (error) {
            console.log(error)
            alert('failed')
        })


    }


    render() {
        const formItems = this.props.configurations.map((configuration, index) =>
            <div className="form-group" key={index}>
                <Field configuration={configuration}/>
            </div>
        );
        var errors =
            (<div className="alert alert-danger ">
                {
                    this.state.errors.map((error, index) =>
                        <li key={index}>
                            {error}
                        </li>
                    )
                }
            </div>);


        return (
            <div className="col-md-8">
                <h1>Form</h1>
                {(this.state.errors.length > 0) ?
                    errors
                    : null}
                <form id="form">
                    {formItems}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        configurations: state.formReducer.configurations,
        action: state.formReducer.action,
        method: state.formReducer.method
    }
};

export default connect(mapStateToProps, actions)(From);
