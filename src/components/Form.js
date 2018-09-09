import React, {Component} from 'react';
import {connect} from 'react-redux'
import Form from 'react-validation/build/form';
import Field from './Field';

class From extends Component {
    handleSubmit = (event) => {
        event.preventDefault();

        // Emulate async API call
        setTimeout(() => {
            this.form.showError(this.userInput, <span>API error</span>);
        }, 1000);
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
                <Form >
                    {formItems}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {configurations: state.formReducer}
};

export default connect(mapStateToProps)(From);
