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
            parent: 'true',
            parent_id: null,
            regex:'^([a-z])$',
            other: []
        },  {
            id: 2,
            name: 'multiple',
            type: 'checkbox',
            label: 'Checkbox',
            value: null,
            parent: 'true',
            parent_id: null,
            regex:'^([a-z0-9]{5,})$',
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
            regex:'^([a-z])$',
            other: []
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
                        parent: action.payload.parent,
                        parent_id: action.payload.parent_id,
                        value: null,
                        options: action.payload.options
                    }
                ]
            }
        case types.DELETE_FIELD:
            return {
                ...state, configurations: state.configurations.filter(field =>
                    field.id !== action.payload &&  field.parent_id !== action.payload
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
                        parent: action.parent,
                        parent_id: action.parent_id,
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
