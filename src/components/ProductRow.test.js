import {fireEvent, render, screen} from "@testing-library/react";
import ProductRow from "./ProductRow";

const product = {
    index: 1,
    img: '',
    name: 'produto 01',
    price: '111',
    quantity: 10,
}

describe('TestAProductRow', () => {
    it('render with valid props', () => {
        render(<ProductRow product={product} />)
        screen.getByText(/produto 01/i)
        screen.getByText(/^111$/i)
        screen.getByText(/^10$/i)
        screen.getByText(/^1110$/i)
    })

    it('inc quantity', async () => {
        render(<ProductRow product={product} />)
        screen.getByText(/^10$/)
        const incBtn = screen.getByTitle(/Increment Button/i)
        await fireEvent.click(incBtn)
        await screen.findByText(/^11$/)
    })
    it('dec quantity', async () => {
        render(<ProductRow product={product} />)
        screen.getByText(/^10$/)
        const incBtn = screen.getByTitle(/Decrement Button/i)
        await fireEvent.click(incBtn)
        await screen.findByText(/^9$/)
    })

})