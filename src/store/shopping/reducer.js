import {
    ADD_PRODUCT,
    DECREMENT_PRODUCT,
    DELETE_PRODUCT,
    INCREMENT_PRODUCT, LOAD_PRODUCTS_FAILED,
    LOAD_PRODUCTS_SUCCEEDED,
    LOADING_STATE
} from "./actionTypes";

export const status = ({
    idle: 'IDLE',
    loading: 'LOADING',
})

export const initialState = {
    products: [],
    shopping_cart: [],
    status: status.idle,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                shopping_cart: [
                    ...state.shopping_cart,
                    {
                        id: action.payload,
                        quantity: 1
                    }
                ]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                shopping_cart: state.shopping_cart.filter(
                    prod => prod.id !== action.payload)
            }
        case INCREMENT_PRODUCT:
            return {
                ...state,
                shopping_cart: [
                    ...state.shopping_cart.map(prod => {
                        if (prod.id === action.payload)
                            prod.quantity += 1
                        return prod
                    })
                ]
            }
        case DECREMENT_PRODUCT:
            return {
                ...state,
                shopping_cart: [
                    ...state.shopping_cart.map(prod => {
                        if (prod.id === action.payload)
                            prod.quantity -= 1
                        return prod
                    })
                ]
            }
        case LOAD_PRODUCTS_SUCCEEDED:
            return {
                ...state,
                products: action.payload,
                status: status.idle
            }
        case LOAD_PRODUCTS_FAILED:
            return {
                ...state,
                error: action.payload,
                status: status.idle
            }
        case LOADING_STATE:
            return {
                ...state,
                status: status.loading
            }
        default:
            return state

    }
}

export default reducer;