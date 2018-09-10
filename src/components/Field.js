import React, {Component} from 'react';
import Select from 'react-select';
import {connect} from 'react-redux'
import * as actions from '../actions'

class Field extends Component {

    render() {
        function radios(configuration) {
            return configuration.options.map((option, index) =>
                <div className="form-check" key={index}>
                    <input name={configuration.name} type="radio" className="form-check-input" value={option.value}/>
                    <label className="form-check-label">
                        {option.label}
                    </label>
                </div>
            );
        }


        function inputType(props) {
            var configuration = props.configuration
            let input = null
            if (configuration.type === 'date' || configuration.type === 'email' || configuration.type === 'number' || configuration.type === 'text' || configuration.type === 'password') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input onChange={(event) => {
                                props.updateValue(configuration.id, event.target.value)
                            }} type={configuration.type} name={configuration.name} className="form-control"/>
                        </div>
                    )
            } else if (configuration.type === 'radio') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            {radios(configuration)}
                        </div>
                    )
            } else if (configuration.type === 'checkbox') {

                input =
                    (
                        <div>
                            <div className="form-check">
                                <input name={configuration.name} type="checkbox" className="form-check-input"
                                       onChange={(event) => {
                                           props.updateValue(configuration.id, event.target.value)
                                       }}
                                />
                                <label className="form-check-label">
                                    {configuration.label}
                                </label>
                            </div>
                        </div>
                    )
            } else if (configuration.type === 'single-select') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <Select name={configuration.name}
                                    onChange={(event) => {
                                        props.updateValue(configuration.id, event.value)
                                    }}
                                    isSearchable="true"
                                    options={configuration.options}
                            />
                        </div>
                    )
            } else if (configuration.type === 'multiple-select') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <Select name={configuration.name}
                                    onChange={(event) => {
                                        console.log(event)
                                        props.updateValue(configuration.id, event)
                                    }}
                                    isSearchable="true"
                                    isMulti="true"
                                    options={configuration.options}
                            />
                        </div>
                    )

            } else if (configuration.type === 'textarea') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <textarea name={configuration.name} className="form-control"
                                      onChange={(event) => {
                                          props.updateValue(configuration.id, event.target.value)
                                      }}
                            ></textarea>
                        </div>
                    )
            } else if (configuration.type === 'file') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input onChange={(event) => {
                                props.updateValue(configuration.id, event.target.files[0])
                            }} type={configuration.type} name={configuration.name} className="form-control"/>
                        </div>
                    )
            }
            return input
        }

        return inputType(this.props)
    }


}

const mapStateToProps = state => {
    return {
        configurations: state.formReducer.configurations,
    }
};
export default connect(mapStateToProps, actions)(Field);

