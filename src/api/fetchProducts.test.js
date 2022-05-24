jest.mock('axios')
import axios from 'axios'
import fetchProducts from "./fetchProducts";

const response = ({
    data: {
        products: ['1']
    }
})

test('fetch products', async () => {
    axios.get.mockResolvedValue(response)
    const result = await fetchProducts()
    expect(result.data).toStrictEqual({products: ['1']})
})