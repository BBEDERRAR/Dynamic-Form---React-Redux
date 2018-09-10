import * as types from '../constants/ActionTypes'

export const addField = (field) => {
    return {
        type: types.CREATE_FIELD,
        payload: field
    };
}

export const editField = (id) => {
    return {
        type: types.EDIT_FIELD,
        payload: id
    }
}

export const deleteField = (id) => {
    return {
        type: types.DELETE_FIELD,
        payload: id
    }
}

export const editAction = (text) => {
    return {
        type: types.EDIT_ACTION,
        payload: text
    }
}

export const editMethod = (text) => {
    return {
        type: types.EDIT_METHOD,
        payload: text
    }
}

export const updateValue = (id,value) => {
    return {
        type: types.UPDATE_VALUE,
        id: id,
        value: value,
    }
}

