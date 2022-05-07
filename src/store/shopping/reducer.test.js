import reducer, {initialState} from "./reducer";
import {addProduct, deleteProduct} from "./actions";

const product = {
    img: './mockup/assets/img/JBL_TUNE 215TWS_Product Image_Black_Accessories.webp',
    title: 'New Product',
    subtitle: 'A great product',
    text: 'this is a great product that u need to buy it',
    price: '12123123',
    hasStock: false
}

describe('test a shopping reducer', () => {
    it('initiate with default values', () => {
        const state = reducer(initialState, {type: 'init'})
        expect(state).toBe(initialState)
    })

    it('add product to the list', () => {
        const state = reducer(initialState, addProduct(product))
        expect(state.products).toHaveLength(1)
        expect(state.products[0]).toBe(product)
    })

    it('delete product to the list', () => {
        let state = reducer(initialState, addProduct(product))
        const otherProduct = {
            ...product,
            title: 'other title'
        }
        state = reducer(state, deleteProduct(otherProduct))
        expect(state.products).toHaveLength(1)
        state = reducer(state, deleteProduct(product))
        expect(state).toStrictEqual(initialState)
    })
})