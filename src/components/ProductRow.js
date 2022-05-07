import React, {Component} from 'react'


class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                index: '',
                img: '',
                name: '',
                price: '',
                quantity: 0,
            }
        }
    }

    componentDidMount(){
        const {product} = this.props;
        this.setState({
            product: {...product}
        })
    }

    incQuantity() {
        this.setState({
            product: {
                ...this.state.product,
                quantity: this.state.product.quantity + 1
            }})
    }

    decQuantity() {
        this.setState({
            product: {
                ...this.state.product,
                quantity: this.state.product.quantity - 1
            }})
    }

    render() {
        const {index, img, name, price, quantity} = this.state.product;
        const total = quantity * price;
        return (
            <tr className="bg-success" key={`${name}-${index}`}>
                <th>
                    <img alt={name} src={img} />
                    <p><strong style={{width: "21px"}}>{name}<br/></strong></p>
                </th>

                <td><strong>{price}</strong></td>
                <td className="mx-auto">
                    <div className="btn-group" role="group">
                        <button
                            title={'Decrement Button'}
                            className="btn btn-info"
                            type="button"
                            onClick={() => this.decQuantity()}
                        >-
                        </button>
                        <button

                            className="btn btn-info"
                            type="button"
                        >{quantity}
                        </button>
                        <button
                            title={'Increment Button'}
                            className="btn btn-info"
                            type="button"
                            onClick={() => this.incQuantity()}
                        >+
                        </button>
                    </div>
                </td>
                <td><strong>{total}</strong></td>
            </tr>
        );
    }
}


export default ProductRow;
