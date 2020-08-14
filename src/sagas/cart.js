import { take, put, call, select } from 'redux-saga/effects'
import { getCart } from '../reducers'
import * as actionTypes from '../actions/actionTypes'
import * as actions from '../actions/index'
import { buyProducts } from '../api'

export function* checkout() {
    try {
        const cart = yield select(getCart)
        yield call(buyProducts, cart)
        yield put(actions.checkoutSuccess(cart))
    } catch (error) {
        yield put(actions.checkoutFailure(error))
    }
}

export function* watchCheckout() {
    while (true) {
        yield take(actionTypes.CHECKOUT_REQUEST)
        yield call(checkout)
    }
}