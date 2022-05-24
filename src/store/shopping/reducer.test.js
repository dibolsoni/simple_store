import reducer, {initialState} from "./reducer";
import {
    addProduct,
    decrementProduct,
    deleteProduct,
    doLoadProducts,
    errorLoadProducts,
    incrementProduct
} from "./actions";
import {loadedState} from "../mockStore";



describe('test a shopping reducer', () => {
    it('initiate with default values', () => {
        const state = reducer(initialState, {type: 'init'})
        expect(state).toStrictEqual(initialState)
    })

    it('add product to the shopping cart', () => {
        const state = reducer(initialState, addProduct(1))
        expect(state.shopping_cart).toHaveLength(1)
        expect(state.shopping_cart[0])
            .toStrictEqual({id: 1, quantity: 1})
    })

    it('delete product to the list', () => {
        let state = reducer(initialState, addProduct(1))
        state = reducer(state, addProduct(2))
        state = reducer(state, deleteProduct(1))
        expect(state.shopping_cart).toHaveLength(1)
        expect(state.shopping_cart[0])
            .toStrictEqual({id: 2, quantity: 1})
    })

    it('increment product quantity', () => {
        let state = reducer(initialState, addProduct(1))
        expect(state.shopping_cart[0].quantity).toBe(1)
        state = reducer(state, incrementProduct(1))
        state = reducer(state, incrementProduct(2))
        expect(state.shopping_cart).toHaveLength(1)
        expect(state.shopping_cart[0].quantity).toBe(2)
    })

    it('decrement product quantity', () => {
        let state = reducer(initialState, addProduct(1))
        state = reducer(state, incrementProduct(1))
        expect(state.shopping_cart[0].quantity).toBe(2)
        state = reducer(state, decrementProduct(1))
        state = reducer(state, decrementProduct(5))
        expect(state.shopping_cart).toHaveLength(1)
        expect(state.shopping_cart[0].quantity).toBe(1)
    })

    it('loads products', () => {
        let state = reducer(initialState, doLoadProducts(loadedState.products))
        expect(state.products).toStrictEqual(loadedState.products)
    })

    it('handle error in load products', () => {
        let state = reducer(initialState, errorLoadProducts('wrong url'))
        expect(state.error).toBe('wrong url')
    })
})