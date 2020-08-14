import * as actionTypes from './actionTypes'

// Products Actions

export const getProducts = () => {
    return {
        type: actionTypes.GET_PRODUCTS
    }
}

// fetch success fetchProductsSuccess
export const getProductsSuccess = products => {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        products
    }
}

// fetch pro failure fetchProductsFailure
export const getProductsFailure = error => ({
    type: actionTypes.GET_PRODUCTS_FAILURE,
    error
})

export const filterProducts = brand => {
    return {
        type: actionTypes.FILTER_PRODUCTS,
        brand
    }
}



// Cart Actions

export function addToCart(productId) {
    return {
        type: actionTypes.ADD_TO_CART,
        productId
    }
}

export function removeFromCart(productId) {
    if (window.confirm('Xóa ???')) {
        return {
            type: actionTypes.REMOVE_FROM_CART,
            productId
        }
    }
}

export function checkout() {
    return {
        type: actionTypes.CHECKOUT_REQUEST
    }
}

export function checkoutSuccess(cart) {
    return {
        type: actionTypes.CHECKOUT_SUCCESS,
        cart
    }
}

export function checkoutFailure(error) {
    return {
        type: actionTypes.CHECKOUT_FAILURE,
        error
    }
}
