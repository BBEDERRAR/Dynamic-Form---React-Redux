import * as types from '../constants/ActionTypes'

const initialState = {

    configurations: [
        {
            name: 'filed',
            type: 'email',
            label: 'Email',
            required: false,
            other: {}
        }, {
            name: 'filed',
            type: 'text',
            label: 'Text',
            required: false,
            other: {}
        }, {
            name: 'filed',
            type: 'textarea',
            label: 'Textarea',
            required: false,
            other: {}
        }, {
            name: 'filed',
            type: 'single-select',
            label: 'Single Select',
            required: false,
            other: {}
        }, {
            name: 'filed',
            type: 'multiple-select',
            label: 'Multiple Select',
            required: false,
            other: {}
        }
    ]

}

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return []


        default:
            return state
    }
}
