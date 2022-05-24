import React from 'react'
import {fireEvent, waitFor, render, screen} from "@testing-library/react";
import ProductCard from "./ProductCard";
import {loadedState, mockStore} from "../store/mockStore";
import {Provider} from "react-redux";
import {addProduct} from "../store/shopping/actions";


describe('TestAProductCard', () => {
    let store;

    beforeEach(() => {
        store = mockStore(loadedState)
    })

    it('instantiate with valid props', () => {
        render(
            <Provider store={store}>
                <ProductCard product={{id: 1}}/>
            </Provider>
        )
        screen.getAllByTitle(/card of product/i)
    })

    it('add a product do shopping cart', async () => {
        render(
            <Provider store={store}>
                <ProductCard product={{id: 1}}/>
            </Provider>
        )
        const button = screen.getByRole('button')
        fireEvent.click(button)
        const card = screen.getByTitle('card of product')
        expect(card.className).toContain('border-success')

    })
})