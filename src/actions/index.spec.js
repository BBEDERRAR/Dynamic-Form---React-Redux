import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('actions test', () => {
    it('addField should create CREATE_FIELD action', () => {
        expect(actions.addField({})).toEqual( {
            type: types.CREATE_FIELD,
            payload: {}
        })
    })

    it('editField should create EDIT_FIELD action', () => {
        expect(actions.editField(5)).toEqual( {
            type: types.EDIT_FIELD,
            payload: 5
        })
    })

    it('deleteField should create DELETE_FIELD action', () => {
        expect(actions.deleteField(3)).toEqual( {
            type: types.DELETE_FIELD,
            payload: 3
        })
    })

    it('editAction should create EDIT_ACTION action', () => {
        expect(actions.editAction('WOW')).toEqual( {
            type: types.EDIT_ACTION,
            payload: 'WOW'
        })
    })

    it('editMethod should create EDIT_METHOD action', () => {
        expect(actions.editMethod('get')).toEqual( {
            type: types.EDIT_METHOD,
            payload: 'get'
        })
    })

    it('updateValue should create UPDATE_VALUE action', () => {
        expect(actions.updateValue(4,'React')).toEqual( {
            type: types.UPDATE_VALUE,
            id: 4,
            value: 'React',
        })
    })
})
