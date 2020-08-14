import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes'

const products = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                inventory: state.inventory - 1
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                inventory: state.inventory + 1
            }
        default:
            return state
    }
}

const filterProducts = state => {
    let filteredProducts = []
    for (var id in state.byId) {
        let product = getProduct(state, id)
        if (product.brand.toUpperCase().includes(state.filterTerm)) {
            filteredProducts.push(product)
        }
    }
    return filteredProducts
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    if (state[product.id]) {
                        product.inventory = state[product.id].inventory
                    }
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            const { productId } = action
            if (productId) {
                return {
                    ...state,
                    [productId]: products(state[productId], action)
                }
            }
            return state
    }
}

const visibleIds = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.products.map(product => product.id)
        default:
            return state
    }
}

const filterTerm = (state = '', action) => {
    switch (action.type) {
        case actionTypes.FILTER_PRODUCTS:
            return action.brand
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return ''
        default:
            return state
    }
}

export default combineReducers({
    byId,
    visibleIds,
    filterTerm
})

export const getProduct = (state, id) => {
    return state.byId[id]
}

export const getVisibleProducts = (state) => {
    return state.filterTerm ?
        filterProducts(state) :
        state.visibleIds.map(id => getProduct(state, id))
}