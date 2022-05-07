import React, {Component} from 'react'
import ProductList from "../containers/ProductList";

const product = {
    img: './mockup/assets/img/JBL_TUNE 215TWS_Product Image_Black_Accessories.webp',
    title: 'New Product',
    subtitle: 'A great product',
    text: 'this is a great product that u need to buy it',
    price: '12123123',
    hasStock: false
}

const props = {
    products: [
        product,
        product,
        product,
        product,
        product,
        product,
        product
    ]
}

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="container" style={bodyStyle}>
                    <ProductList {...props} />
                </div>
            </div>
        );
    }
}

const bodyStyle = {
    backgroundColor: 'rgba(32,201,151,0.35)',
    fontFamily: 'Mulish, sans-serif'
}

export default Home