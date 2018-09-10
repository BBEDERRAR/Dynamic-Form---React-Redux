import * as types from '../constants/ActionTypes'

const initialState = {
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
            regex:'^([a-z])$',
            other: []
        }, {
            id: 2,
            name: 'text',
            type: 'text',
            label: 'Text',
            value: null,
            required: true,
            regex:'^([a-z0-9]{5,})$',
            other: []
        }, {
            id: 3,
            name: 'textarea',
            type: 'textarea',
            label: 'Textarea',
            value: null,
            required: true,
            regex:'^([a-z0-9]{5,})$',
            other: []
        }, {
            id: 4,
            name: 'single',
            type: 'single-select',
            label: 'Single Select',
            value: null,
            required: true,
            regex:'^([a-z0-9]{5,})$',
            options: [
                {
                    label: 'label 1',
                    value: 'value 1'
                },
                {
                    label: 'label 2',
                    value: 'value 2'
                },
                {
                    label: 'label 3',
                    value: 'value 3'
                },
                {
                    label: 'label 4',
                    value: 'value 4'
                },
                {
                    label: 'label 5',
                    value: 'value 5'
                }
            ]

        }, {
            id: 5,
            name: 'multiple',
            type: 'multiple-select',
            label: 'Multiple Select',
            value: null,
            regex:'^([a-z0-9]{5,})$',
            options: [
                {
                    label: 'label 1',
                    value: 'value 1'
                },
                {
                    label: 'label 2',
                    value: 'value 2'
                },
                {
                    label: 'label 3',
                    value: 'value 3'
                },
                {
                    label: 'label 4',
                    value: 'value 4'
                },
                {
                    label: 'label 5',
                    value: 'value 5'
                }
            ]

        }

    ]
}


export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_FIELD:
            return {
                ...state,
                configurations: [
                    ...state.configurations, {
                        id: state.configurations.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                        name: action.payload.name,
                        type: action.payload.type,
                        label: action.payload.label,
                        required: action.payload.required,
                        regex: action.payload.regex,
                        value: null,
                        options: action.payload.options
                    }
                ]
            }
        case types.DELETE_FIELD:
            return {
                ...state, configurations: state.configurations.filter(field =>
                    field.id !== action.payload
                )
            }

        case types.EDIT_FIELD:
            return {
                ...state, configurations: state.configurations.map(field =>
                    field.id === action.id ? {
                        ...field,
                        name: action.name,
                        type: action.type,
                        label: action.label,
                        value: action.value,
                        options: action.options
                    } : field
                )
            }
        case types.UPDATE_VALUE:
            return {
                ...state, configurations: state.configurations.map(field =>
                    field.id === action.id ? {
                        ...field,
                        value: action.value
                    } : field
                )
            }


        case types.EDIT_METHOD:
            return {
                ...state, method: action.payload
            }

        case types.EDIT_ACTION:
            return {
                ...state, action: action.payload
            }

        default:
            return state
    }
}
