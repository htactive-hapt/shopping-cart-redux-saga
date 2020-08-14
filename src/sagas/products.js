import { put, call, takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import * as actions from '../actions/index'
import { getProducts } from '../api'

export function* getAllProducts() {
  try {
    const products = yield call(getProducts);
    yield put(actions.getProductsSuccess(products));
  } catch (error) {
    yield put(actions.getProductsFailure(error));
  }
}

export function* watchGetProducts() {
  yield takeEvery(actionTypes.GET_PRODUCTS, getAllProducts)
}