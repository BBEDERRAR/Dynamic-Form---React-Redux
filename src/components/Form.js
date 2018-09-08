import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../styles/form.css'

class From extends Component {

    render() {
        const formItems = this.props.configurations.map((configuration, index) =>
            <div className="form-group" key={index}>

                {inputType(configuration)}

            </div>
        );

        function inputType(configuration) {
            // console.log(configuration.type)
            let input = null
            if (configuration.type === 'email') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input type="email" className="form-control"></input>
                        </div>
                    )
            } else if (configuration.type === 'text') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input type="text" className="form-control"></input>
                        </div>
                    )
            } else if (configuration.type === 'number') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input type="number" className="form-control"></input>
                        </div>
                    )
            } else if (configuration.type === 'radio') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input type="radio" className="form-control">radio 1</input>
                            <input type="radio" className="form-control">radio 2</input>
                            <input type="radio" className="form-control">radio 3</input>
                        </div>
                    )
            } else if (configuration.type === 'checkbox') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input type="checkbox" className="form-control">radio 1</input>
                            <input type="checkbox" className="form-control">radio 2</input>
                            <input type="checkbox" className="form-control">radio 3</input>
                        </div>
                    )
            } else if (configuration.type === 'single-select') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <select className="form-control">
                                <option value="select 1">select 1</option>
                                <option value="select 2">select 2</option>
                                <option value="select 3">select 3</option>
                            </select>
                        </div>
                    )
            } else if (configuration.type === 'multiple-select') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <select className="custom-select" multiple>
                                <option value="select multiple 1">select 1</option>
                                <option value="select multiple 2">select 2</option>
                                <option value="select multiple 3">select 3</option>
                                <option value="select multiple 4">select 4</option>
                                <option value="select multiple 5">select 5</option>
                            </select>
                        </div>
                    )

            } else if (configuration.type === 'textarea') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <textarea className="form-control"></textarea>
                        </div>
                    )
            }
            return input
        }

        return (
            <div id="form">
                <h1>Form</h1>
                <form className="col-md-8 ">
                    {formItems}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {configurations: state.formReducer.configurations}

};

export default connect(mapStateToProps)(From);
