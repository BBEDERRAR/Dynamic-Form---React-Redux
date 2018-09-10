import formReducer from './formReducer'
import * as types from '../constants/ActionTypes'

describe('todos reducer', () => {

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
                        regex: '^([a-z])$',
                        other: []
                    }, {
                        id: 2,
                        name: 'text',
                        type: 'text',
                        label: 'Text',
                        value: null,
                        required: true,
                        regex: '^([a-z0-9]{5,})$',
                        other: []
                    }, {
                        id: 3,
                        name: 'textarea',
                        type: 'textarea',
                        label: 'Textarea',
                        value: null,
                        required: true,
                        regex: '^([a-z0-9]{5,})$',
                        other: []
                    }, {
                        id: 4,
                        name: 'single',
                        type: 'single-select',
                        label: 'Single Select',
                        value: null,
                        required: true,
                        regex: '^([a-z0-9]{5,})$',
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
                        regex: '^([a-z0-9]{5,})$',
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
        )
    })

    it('should handle CREATE_FIELD', () => {
        expect(
            formReducer([], {
                type: types.CREATE_FIELD,
                payload: {
                    name: 'text',
                    type: 'text',
                    label: 'New Text',
                    value: null,
                    required: true,
                    regex: '^([a-z0-9])$',
                    other: []
                }
            })
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
                        regex: '^([a-z])$',
                        other: []
                    }, {
                        id: 2,
                        name: 'text',
                        type: 'text',
                        label: 'Text',
                        value: null,
                        required: true,
                        regex: '^([a-z0-9]{5,})$',
                        other: []
                    }, {
                        id: 3,
                        name: 'textarea',
                        type: 'textarea',
                        label: 'Textarea',
                        value: null,
                        required: true,
                        regex: '^([a-z0-9]{5,})$',
                        other: []
                    }, {
                        id: 4,
                        name: 'single',
                        type: 'single-select',
                        label: 'Single Select',
                        value: null,
                        required: true,
                        regex: '^([a-z0-9]{5,})$',
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
                        regex: '^([a-z0-9]{5,})$',
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

                    },
                    {
                        id: 6,
                        name: 'text',
                        type: 'text',
                        label: 'New Text',
                        value: null,
                        required: true,
                        regex: '^([a-z0-9])$',
                        other: []
                    }

                ]
            }
        )
    })
    it('should handle DELETE_FIELD', () => {
        expect(
            formReducer([], {
                type: types.DELETE_FIELD,
                payload: 4
            })
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
                        regex: '^([a-z])$',
                        other: []
                    }, {
                        id: 2,
                        name: 'text',
                        type: 'text',
                        label: 'Text',
                        value: null,
                        required: true,
                        regex: '^([a-z0-9]{5,})$',
                        other: []
                    }, {
                        id: 3,
                        name: 'textarea',
                        type: 'textarea',
                        label: 'Textarea',
                        value: null,
                        required: true,
                        regex: '^([a-z0-9]{5,})$',
                        other: []
                    }, {
                        id: 5,
                        name: 'multiple',
                        type: 'multiple-select',
                        label: 'Multiple Select',
                        value: null,
                        regex: '^([a-z0-9]{5,})$',
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
        )
    })




})
