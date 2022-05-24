import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import ProductRow from "./ProductRow";
import {loadedState, mockStore} from "../store/mockStore";
import {Provider} from "react-redux";
import {decrementProduct, deleteProduct, incrementProduct} from "../store/shopping/actions";
import {Table} from "react-bootstrap";

const mockTable = children => (
    <Table>
        <tbody>
            {children}
        </tbody>
    </Table>
)

describe('TestAProductRow', () => {
    let store;

    beforeEach(() => {
        store = mockStore(loadedState)
    })

    it('render with valid props', () => {
        render(
            <Provider store={store}>
                {mockTable(<ProductRow product={{id: 1}}/>)}
            </Provider>
        )
        const product = loadedState.products.find(prod => prod.id === 1)
        screen.getByText(product.title)
    })

    it('inc quantity', async () => {
        render(
            <Provider store={store}>
                {mockTable(<ProductRow product={{id: 1}}/>)}
            </Provider>
        )
        const incBtn = screen.getByTitle(/increment/i)
        fireEvent.click(incBtn)
        expect(store.getActions()[0]).toStrictEqual(incrementProduct(1))

    })
    it('dec quantity', async () => {
        render(
            <Provider store={store}>
                {mockTable(<ProductRow product={{id: 2}}/>)}
            </Provider>
        )
        const decBtn = screen.getByTitle(/decrement/i)
        fireEvent.click(decBtn)
        expect(store.getActions()[0]).toStrictEqual(decrementProduct(2))
    })

    it('removes product when dec with quantity 1', () => {
        render(
            <Provider store={store}>
                {mockTable(<ProductRow product={{id: 1}}/>)}
            </Provider>
        )
        const decBtn = screen.getByTitle(/decrement/i)
        fireEvent.click(decBtn)
        expect(store.getActions()[0]).toStrictEqual(deleteProduct(1))
    })

})