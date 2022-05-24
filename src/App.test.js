import {render, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'
import '@testing-library/jest-dom'
import App from './app'
import {Provider} from "react-redux";
import store from "./store";

test('home path', async () => {
    const history = createMemoryHistory()
    render(
        <Provider store={store}>
            <Router location={history.location} navigator={history}>
                <App/>
            </Router>
        </Provider>,
    )
    expect(screen.getByText(/lista de produtos/i)).toBeInTheDocument()
})

test('carrinho de compras path', async () => {
    const history = createMemoryHistory()
    history.push('/carrinho-de-compras')
    render(
        <Provider store={store}>
            <Router location={history.location} navigator={history}>
                <App/>
            </Router>
        </Provider>,
    )
    expect(screen.getByText(/seu carrinho de compras/i)).toBeInTheDocument()
})