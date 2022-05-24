import {
    ADD_PRODUCT,
    DECREMENT_PRODUCT,
    DELETE_PRODUCT,
    INCREMENT_PRODUCT, LOAD_PRODUCTS_FAILED,
    LOAD_PRODUCTS_REQUESTED, LOAD_PRODUCTS_SUCCEEDED, LOADING_STATE
} from "./actionTypes";

export const incrementProduct = (product_id) => ({
    type: INCREMENT_PRODUCT,
    payload: product_id
})

export const decrementProduct = (product_id) => ({
    type: DECREMENT_PRODUCT,
    payload: product_id
})

export const addProduct = (product_id) => ({
    type: ADD_PRODUCT,
    payload: product_id
})

export const deleteProduct = (product_id) => ({
    type: DELETE_PRODUCT,
    payload: product_id
})

export const requestLoadProducts = () => ({
    type: LOAD_PRODUCTS_REQUESTED
})

export const doLoadProducts = (products) => ({
    type: LOAD_PRODUCTS_SUCCEEDED,
    payload: products
})

export const errorLoadProducts = (error) => ({
    type: LOAD_PRODUCTS_FAILED,
    payload: error
})

export const loadingState = () => ({
    type: LOADING_STATE
})

