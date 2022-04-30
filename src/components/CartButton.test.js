import {render, screen} from "@testing-library/react";
import CartButton from "./CartButton";

describe('TestACartButton', () => {
    test('cart button with products', () => {
        render(<CartButton hasProducts={true} />)
        const button = screen.getByRole('button')
        expect(button).toBeEnabled()
        const icon = screen.getByLabelText(/Shopping Cart/i)
        const className = 'fa-shopping-cart'
        expect(icon.className.search(className)).toBeTruthy()

    })

    test('cart button without products',  () => {
        render(<CartButton hasProducts={false} />)
        const button = screen.getByRole('button')
        expect(button).not.toBeEnabled()
        const icon = screen.getByLabelText(/Shopping Cart/i)
        const className = 'fa-cart-plus'
        expect(icon.className.search(className)).toBeTruthy()
    })
})