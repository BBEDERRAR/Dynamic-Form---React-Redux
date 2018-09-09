import React, {Component} from 'react';
import Select from 'react-select';

class Field extends Component {

    render() {
        function radios(configuration) {
            return configuration.options.map((option, index) =>
                <div className="form-check" key={index}>
                    <input name={configuration.name}  type="radio" className="form-check-input" value={option.value}/>
                    <label className="form-check-label">
                        {option.label}
                    </label>
                </div>
            );
        }

        function checkboxes(configuration) {
            return configuration.options.map((option, index) =>
                <div className="form-check" key={index}>
                    <input name={configuration.name}  type="checkbox" className="form-check-input" value={option.value}/>
                    <label className="form-check-label">
                        {option.label}
                    </label>
                </div>
            );
        }

        function inputType(configuration) {
            // console.log(configuration.type)
            let input = null
            if (configuration.type === 'email') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input type="email" className="form-control"/>
                        </div>
                    )
            } else if (configuration.type === 'text') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input type="text" className="form-control"/>
                        </div>
                    )
            } else if (configuration.type === 'password') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input type="password" className="form-control"/>
                        </div>
                    )
            } else if (configuration.type === 'number') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <input type="number" className="form-control"/>
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
                            <label>{configuration.label}</label>
                            {checkboxes(configuration)}
                        </div>
                    )
            } else if (configuration.type === 'single-select') {
                input =
                    (
                        <div>
                            <label>{configuration.label}</label>
                            <Select
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
                            <Select
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
                            <textarea className="form-control"></textarea>
                        </div>
                    )
            }
            return input
        }

        return inputType(this.props.configuration)
    }


}

export default Field;