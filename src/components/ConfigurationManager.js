import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'


class ConfigurationManager extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            field: {...this.props.field},
            label: '',
            value: '',
            options: []
        }

    }

    addField(event) {
        this.props.addField(this.state.field)
        this.setState({
            field: {
                name: '',
                label: '',
                type: 'text',
                options: []
            }
        });
    }





    render() {
        const configurations = this.props.configurations.map((configuration, index) =>
            <div className="form-group" key={index}>
                <span className="m-2">name : {configuration.name}</span>|
                <span className="m-2">label : {configuration.label}</span>|
                <span className="m-2">type : {configuration.type}</span>
                <span className="m-2">required : {configuration.required?'true':'false'}</span>
                <br/>
                <button className="btn btn-danger" onClick={() => {
                    this.props.deleteField(configuration.id)
                }}>delete
                </button>
                <hr/>
            </div>
        );

        return (
            <div className="col-md-4 text-center">
                <h1>Configuration Manager</h1>
                <div className="alert alert-success">
                    This Configuration Manager is a simulation to the configuration get it from the API
                </div>
                <hr/>
                <div className="form-group">
                    <label>Action</label>
                    <input value={this.props.action} onChange={(event) => {
                        this.props.editAction(event.target.value)
                    }} className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label>Method</label>
                    <select value={this.props.method} onChange={(event) => {this.props.editMethod(event.target.value)}} className="form-control">
                        <option value="get">get</option>
                        <option value="post">post</option>
                        <option value="patch">patch</option>
                        <option value="put">put</option>
                        <option value="delete">delete</option>
                    </select>
                </div>
                <hr/>
                <h2>Add Input</h2>
                <div className="form-group">
                    <label>Label Name</label>
                    <input value={this.state.field.label} onChange={(event) => {
                        this.setState({
                            field: {...this.state.field, label: event.target.value}
                        });
                    }} className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label>Input Name</label>
                    <input value={this.state.field.name} onChange={(event) => {
                        this.setState({
                            field: {...this.state.field, name: event.target.value}
                        });
                    }} className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label>Required</label>
                    <select value={this.state.field.required} onChange={(event) => {
                        this.setState({
                            field: {...this.state.field, required: (event.target.value==='true')?1:0}
                        });
                    }} className="form-control" >
                        <option value="1">True</option>
                        <option value="0">False</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <select value={this.state.field.type} onChange={(event) => {
                        this.setState({
                            field: {...this.state.field, type: event.target.value}
                        });
                    }} className="form-control">
                        <option value="text">text</option>
                        <option value="number">number</option>
                        <option value="email">email</option>
                        <option value="password">password</option>
                        <option value="textarea">textarea</option>
                        <option value="multi-select">multi-select</option>
                        <option value="single-select">single-select</option>
                        <option value="radio">radio</option>
                        <option value="checkbox">checkbox</option>
                        <option value="file">file</option>
                        <option value="date">date</option>
                    </select>
                </div>
                { (this.state.field.type === 'text')?
                    <div className="form-group">
                        <label>Regex</label>
                        <input value={this.state.field.regex} onChange={(event) => {
                        this.setState({
                            field: {...this.state.field, regex: event.target.value}
                        });
                    }} className="form-control" type="text"/>

                    </div>
                    : null}
                {(this.state.field.type === 'single-select' || this.state.field.type === 'multi-select' || this.state.field.type === 'single-select' || this.state.field.type === 'radio' ) ?
                    <div className="form-group">
                        <label className="text-primary">Options</label>
                        <div className="row">
                            <div className="m-0 p-0 col-md-5">
                                <label>Label</label>
                                <input value={this.state.label} onChange={(event) => {
                                    this.setState({label: event.target.value});
                                }} className="form-control" type="text"/>
                            </div>
                            <div className="m-0 p-0 col-md-5">
                                <label>Value</label>
                                <input value={this.state.value} onChange={(event) => {
                                    this.setState({value: event.target.value});
                                }} className="form-control" type="text"/>
                            </div>
                            <div className="m-0 pt-4 col-md-2">
                                <button disabled={this.state.label === '' || this.state.value === ''}
                                        className="btn btn-primary"
                                        onClick={(event) => {
                                            this.setState({
                                                field: {
                                                    ...this.state.field,
                                                    options: [...this.state.field.options, {
                                                        label: this.state.label,
                                                        value: this.state.value
                                                    }]
                                                },
                                                label: '',
                                                value: '',
                                            });
                                        }}>
                                    Add
                                </button>
                            </div>

                        </div>
                    </div>

                    : null}

                <button disabled={this.state.field.label === '' || this.state.field.name === ''}
                        className="btn btn-primary"
                        onClick={(event) => {
                            this.addField(event)
                        }}>Add Field
                </button>

                <hr/>
                <h2>The Current Configurations</h2>
                {configurations}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        configurations: state.formReducer.configurations,
        action: state.formReducer.action,
        method: state.formReducer.method,
        field: {
            name: '',
            type: 'text',
            label: '',
            required: true,
            regex: '^([a-z0-9]',
            options: []
        }
    }
};

export default connect(mapStateToProps, actions)(ConfigurationManager);

