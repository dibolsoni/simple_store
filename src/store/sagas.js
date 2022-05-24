import { call, put, takeLatest } from 'redux-saga/effects'
import {LOAD_PRODUCTS_REQUESTED} from "./shopping/actionTypes";
import fetchProducts from "../api/fetchProducts";
import {doLoadProducts, errorLoadProducts, loadingState} from "./shopping/actions";

function* requestFetchProducts() {
    try {
        yield put(loadingState())
        const result = yield call(fetchProducts)
        yield put(doLoadProducts(result.data))
    } catch (e) {
        yield put(errorLoadProducts(e))
    }
}

function* saga(){
    yield takeLatest(LOAD_PRODUCTS_REQUESTED, requestFetchProducts)
}

export default saga;