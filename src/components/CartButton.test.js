import {render, screen} from "@testing-library/react";
import CartButton from "./CartButton";
import {MemoryRouter} from "react-router-dom";

describe('TestACartButton', () => {
    test('cart button with products', () => {
        render(
            <MemoryRouter>
                <CartButton hasProducts={true}/>
            </MemoryRouter>
        )
        const button = screen.getByRole('button')
        expect(button).toBeEnabled()
        const icon = screen.getByLabelText(/Shopping Cart/i)
        const className = 'fa-shopping-cart'
        expect(icon.className.search(className)).toBeTruthy()

    })

    test('cart button without products', () => {
        render(
            <MemoryRouter>
                <CartButton hasProducts={false}/>
            </MemoryRouter>
        )
        const button = screen.getByRole('button')
        expect(button).not.toBeEnabled()
        const icon = screen.getByLabelText(/Shopping Cart/i)
        const className = 'fa-cart-plus'
        expect(icon.className.search(className)).toBeTruthy()
    })
})