import {ADD_PRODUCT, DELETE_PRODUCT} from "./actionTypes";
import {addProduct} from "./actions";


export const initialState = {
    products: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(prod => prod !== action.payload)
            }
        default:
            return state
    }
}

export default reducer;