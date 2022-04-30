import React from 'react'
import {render, screen} from "@testing-library/react";
import ProductList from "./ProductList";
import {props as productProps} from '../components/ProductCard.test';

const {product} = productProps
const props = {
    products: [
        product,
        product
    ]
}
describe('TestAProductList', () => {
    test('instantiate with valid props', () => {
        render(<ProductList {...props} />)
        const products = screen.getAllByText(product.title)
        expect(products).toHaveLength(2)
    })
    test('must have 2 rows and 3 columns', () => {
        const newProps = {
            ...props,
            products: [
                product,
                product,
                product,
                product
            ]
        }
        render(<ProductList {...newProps} />)

    })
})