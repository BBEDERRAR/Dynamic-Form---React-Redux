import React, {Component} from 'react';
import {connect} from 'react-redux'
import Field from './Field';
import axios from 'axios';
import FormData from 'form-data'
import * as actions from '../actions'

class From extends Component {
    handleSubmit = (event) => {
        event.preventDefault()

        // Test Regex
        for (var i = 0; i < this.props.configurations.length; i++) {
            var configuration=this.props.configurations[i]
            var term = configuration.value;
            var re = new RegExp(configuration.regex);
            if (!re.test(term)) {
                alert(configuration.label + "is not valid");
                var valid = false;
                break;
            }else {
                alert(configuration.label + "is valid");

            }
        }
        if (!valid)
            return false

        var form = new FormData();
        this.props.configurations.map((configuration) => {
                form.append(configuration.name, configuration.value)
            }
        );
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


    };

    render() {
        const formItems = this.props.configurations.map((configuration, index) =>
            <div className="form-group" key={index}>
                <Field configuration={configuration}/>
            </div>
        );


        return (
            <div className="col-md-8">
                <h1>Form</h1>
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
