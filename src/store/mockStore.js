import configureMockStore from 'redux-mock-store';
import {initialState} from "./shopping/reducer";


const product = {
    image: './mockup/assets/img/JBL_TUNE 215TWS_Product Image_Black_Accessories.webp',
    title: 'New Product',
    description: 'this is a great product that u need to buy it',
    price: 121.05,
    isSelected: false,
}

const products = [
    {...product, id: 1},
    {...product, id: 2},
    {...product, id: 3},
    {...product, id: 4},
    {...product, id: 5},
    {...product, id: 6},
]

export const loadedState = {
    ...initialState,
    products: [...products],
    shopping_cart: [
        {id: 1, quantity: 1},
        {id: 2, quantity: 2}
    ]
}

export const mockStore = configureMockStore();