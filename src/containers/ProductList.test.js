import React from 'react'
import {render, screen} from "@testing-library/react";
import ProductList from "./ProductList";
import {mockStore, loadedState} from "../store/mockStore";
import {Provider} from "react-redux";


describe('TestAProductList', () => {
    let store;

    beforeEach(() => {
        store = mockStore(loadedState)
    })

    test('instantiate with valid props', async () => {
        render(
            <Provider store={store}>
                <ProductList />
            </Provider>
        )
        const products = await screen.findAllByText("New Product")
        expect(products).toHaveLength(loadedState.products.length)
    })

})