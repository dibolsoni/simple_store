import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CartButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasProducts: {
                true: {className: 'fa-cart-plus'},
                false: {className: 'fa-shopping-cart'}
            }
        }
    }


    render() {
        const {hasProducts} = this.props;
        const {className} = this.state.hasProducts[hasProducts];
        return (
            <Link to={'/carrinho-de-compras'}>
                <button
                    className="btn btn-success"
                    type="button"
                    style={cartButtonStyle}
                    disabled={!hasProducts}
                >
                    <i
                        className={`fas ${className}`}
                        aria-label={'shopping cart'}
                    ></i>
                </button>
            </Link>
        );
    }
}

const cartButtonStyle = {
    backgroundColor: 'rgb(69,218,161)'
}


export default CartButton;
