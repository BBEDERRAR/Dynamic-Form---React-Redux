import formReducer from './formReducer'
import * as types from '../constants/ActionTypes'

describe('form reducer', () => {

    it('should handle initial state', () => {
        expect(
            formReducer(undefined, {})
        ).toEqual(
            {
                action: '',
                method: 'get',
                configurations: [
                    {
                        id: 1,
                        name: 'email',
                        type: 'email',
                        label: 'Email',
                        value: null,
                        required: true,
                        parent: 'true',
                        parent_id: null,
                        regex: '^([a-z])$',
                        other: []
                    }, {
                        id: 2,
                        name: 'multiple',
                        type: 'checkbox',
                        label: 'Checkbox',
                        value: null,
                        parent: 'true',
                        parent_id: null,
                        regex: '^([a-z0-9]{5,})$',
                        options: []

                    },
                    {
                        id: 3,
                        name: 'textarea',
                        type: 'textarea',
                        label: 'Textarea',
                        value: null,
                        required: true,
                        parent: 'false',
                        parent_id: 2,
                        regex: '^([a-z])$',
                        other: []
                    }
                ]
            }
        )
    })

    it('should handle CREATE_FIELD', () => {
        expect(
            formReducer(undefined, {
                type: types.CREATE_FIELD,
                payload: {
                    name: 'text',
                    type: 'text',
                    label: 'New Text',
                    value: null,
                    required: true,
                    parent: 'true',
                    parent_id: null,
                    regex: '^([a-z0-9])$',
                    other: []
                }
            })
        ).toEqual(
            {
                "action": "",
                "configurations": [{
                    "id": 1,
                    "label": "Email",
                    "name": "email",
                    "other": [],
                    "parent": "true",
                    "parent_id": null,
                    "regex": "^([a-z])$",
                    "required": true,
                    "type": "email",
                    "value": null
                }, {
                    "id": 2,
                    "label": "Checkbox",
                    "name": "multiple",
                    "options": [],
                    "parent": "true",
                    "parent_id": null,
                    "regex": "^([a-z0-9]{5,})$",
                    "type": "checkbox",
                    "value": null
                }, {
                    "id": 3,
                    "label": "Textarea",
                    "name": "textarea",
                    "other": [],
                    "parent": "false",
                    "parent_id": 2,
                    "regex": "^([a-z])$",
                    "required": true,
                    "type": "textarea",
                    "value": null
                }, {
                    "id": 4,
                    "label": "New Text",
                    "name": "text",
                    "options": undefined,
                    "parent": "true",
                    "parent_id": null,
                    "regex": "^([a-z0-9])$",
                    "required": true,
                    "type": "text",
                    "value": null
                }],
                "method": "get"
            }
        )
    })
    it('should handle DELETE_FIELD', () => {
        expect(
            formReducer(undefined, {
                type: types.DELETE_FIELD,
                payload: 2
            })
        ).toEqual(
            {
                "action": "",
                "configurations": [{
                    "id": 1,
                    "label": "Email",
                    "name": "email",
                    "other": [],
                    "parent": "true",
                    "parent_id": null,
                    "regex": "^([a-z])$",
                    "required": true,
                    "type": "email",
                    "value": null
                }],
                "method": "get"
            }
        )
    })
    it('should handle UPDATE_VALUE', () => {

        expect(formReducer(undefined, {
            type: types.UPDATE_VALUE,
            id: 1,
            value: 'Test Reducer',
        })).toEqual(
            {
                action: '',
                method: 'get',
                configurations: [
                    {
                        id: 1,
                        name: 'email',
                        type: 'email',
                        label: 'Email',
                        value: 'Test Reducer',
                        required: true,
                        parent: 'true',
                        parent_id: null,
                        regex: '^([a-z])$',
                        other: []
                    }, {
                        id: 2,
                        name: 'multiple',
                        type: 'checkbox',
                        label: 'Checkbox',
                        value: null,
                        parent: 'true',
                        parent_id: null,
                        regex: '^([a-z0-9]{5,})$',
                        options: []

                    }, {
                        id: 3,
                        name: 'textarea',
                        type: 'textarea',
                        label: 'Textarea',
                        value: null,
                        required: true,
                        parent: 'false',
                        parent_id: 2,
                        regex: '^([a-z])$',
                        other: []
                    }]
            });
    });

})

