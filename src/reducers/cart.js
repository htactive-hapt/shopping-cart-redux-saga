import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    checkoutStatus: {
        checkoutPending: false,
        error: null
    },
    quantityById: {}
}

function checkoutStatus(state = initialState.checkoutStatus, action) {
    switch (action.type) {
        case actionTypes.CHECKOUT_REQUEST:
            return {
                checkoutPending: true,
                error: null
            }
        case actionTypes.CHECKOUT_SUCCESS:
            return initialState.checkoutStatus
        case actionTypes.CHECKOUT_FAILURE:
            return {
                checkoutPending: false,
                error: action.error
            }
        default:
            return state
    }
}

function quantityById(state = initialState.quantityById, action) {
    const { productId } = action
    switch (action.type) {
        case actionTypes.CHECKOUT_SUCCESS:
            return initialState.quantityById
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                [productId]: (state[productId] || 0) + 1
            }
        case actionTypes.REMOVE_FROM_CART:
            const qty = (state[productId] || 0) - 1
            const copy = { ...state }
            if (qty > 0) {
                copy[productId] = qty
            } else {
                delete copy[productId]
            }
            return copy
        default:
            return state
    }
}

export default combineReducers({
    checkoutStatus,
    quantityById
})

export function getQuantity(state, productId) {
    return state.quantityById[productId] || 0
}

export function getAddedIds(state) {
    return Object.keys(state.quantityById)
}
