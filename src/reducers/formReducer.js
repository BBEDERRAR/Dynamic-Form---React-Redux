import * as types from '../constants/ActionTypes'

const initialState = [

    {
        id: 1,
        name: 'filed',
        type: 'email',
        label: 'Email',
        other: []
    }, {
        id: 2,
        name: 'filed',
        type: 'text',
        label: 'Text',
        other: []
    }, {
        id: 3,
        name: 'filed',
        type: 'textarea',
        label: 'Textarea',
        other: []
    }, {
        id: 4,
        name: 'filed',
        type: 'single-select',
        label: 'Single Select',
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
        name: 'filed',
        type: 'multiple-select',
        label: 'Multiple Select',
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


export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_FIELD:
            return [
                ...state, {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    name: action.payload.name,
                    type: action.payload.type,
                    label: action.payload.label,
                    options: action.payload.options
                }
            ]
        case types.DELETE_FIELD:
            return state.filter(field =>
                field.id !== action.payload
            )

        case types.EDIT_FIELD:
            return state.map(field =>
                field.id === action.id ? {
                    ...field,
                    name: action.name,
                    type: action.type,
                    label: action.label,
                    options: action.options
                } : field
            )

        default:
            return state
    }
}
