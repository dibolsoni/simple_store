import React, {Component} from 'react'
import {decrementProduct, deleteProduct, incrementProduct} from "../store/shopping/actions";
import {connect} from "react-redux";


class ProductRow extends Component {
    handleDecrementProduct() {
        const {product, deleteProduct, decrementProduct} = this.props;
        const {quantity, id} = product;
        if (quantity > 1)
            decrementProduct(id)
        else
            deleteProduct(id)
    }

    render() {
        const {incrementProduct, product} = this.props;
        const {id, description, title, price, quantity} = product;
        const total = quantity * price;
        return (
            <tr className="bg-success">
                <th style={{maxHeight: '100px'}}>
                    <p><strong style={{width: "21px"}}>{title}<br/></strong></p>
                    <span className={'text-muted'}>{description.slice(0, 35)}</span>
                </th>

                <td><strong>R${price.toFixed(2)}</strong></td>
                <td className="mx-auto">
                    <div className="btn-group" role="group">
                        <button
                            title={'decrement'}
                            className="btn btn-info"
                            type="button"
                            onClick={() => this.handleDecrementProduct()}
                        >-
                        </button>
                        <button
                            title={"quantity"}
                            className="btn btn-info"
                            type="button"
                        >{quantity}
                        </button>
                        <button
                            title={'increment'}
                            className="btn btn-info"
                            type="button"
                            onClick={() => incrementProduct(id)}
                        >+
                        </button>
                    </div>
                </td>
                <td><strong>R${total.toFixed((2))}</strong></td>
            </tr>
        );
    }
}

const mapStateToProps = (state, props) => ({
    product: {
        ...state.products.find(prod => prod.id === props.product.id),
        quantity: state.shopping_cart.find(prod => prod.id === props.product.id)?.quantity
    }
})

const mapDispatchToProps = dispatch => ({
    incrementProduct: (prod_id) => dispatch(incrementProduct(prod_id)),
    decrementProduct: (prod_id) => dispatch(decrementProduct(prod_id)),
    deleteProduct: (prod_id) => dispatch(deleteProduct(prod_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductRow);
