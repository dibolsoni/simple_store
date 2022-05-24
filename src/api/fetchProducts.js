import axios from 'axios'

const fetchProducts = async () => {
    return await axios.get('https://fakestoreapi.com/products')
        .then(resp => resp)
        .catch(e => e)
}

export default fetchProducts