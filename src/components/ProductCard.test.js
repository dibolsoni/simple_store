import React from 'react'
import {render, screen} from "@testing-library/react";
import ProductCard from "./ProductCard";

export const props = {
    product: {
        img: './mockup/assets/img/JBL_TUNE 215TWS_Product Image_Black_Accessories.webp',
        title: 'New Product',
        subtitle: 'A great product',
        text: 'this is a great product that u need to buy it',
        price: '12123123',
        hasStock: false
    }
}

describe('TestAProductCard', () => {


    it('instantiate with valid props', () => {
        const newProps = {...props,
            product: {...props.product, hasStock: true}
        }
        render(<ProductCard {...newProps} />)
        const {product} = props;
        for (const prop of [product.title, product.text, product.subtitle, product.price]) {
            screen.getByText(prop)
        }
        screen.getByAltText(/product/i)
        const button = screen.getByRole('button')
        expect(button).toBeEnabled()
    })

    it('disable button when dont have stock', () => {
        render(<ProductCard {...props} />)
        const button = screen.getByRole('button')
        expect(button).not.toBeEnabled()
    })
})