import {ADD_PRODUCT, DECREMENT_PRODUCT, DELETE_PRODUCT, INCREMENT_PRODUCT} from "./actionTypes";

export const incrementProduct = (product_id) => ({
    type: INCREMENT_PRODUCT,
    payload: product_id
})

export const decrementProduct = (product_id) => ({
    type: DECREMENT_PRODUCT,
    payload: product_id
})

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})

export const deleteProduct = (product) => ({
    type: DELETE_PRODUCT,
    payload: product
})