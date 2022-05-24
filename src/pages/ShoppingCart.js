import React, {Component} from 'react'
import ProductRow from "../components/ProductRow";
import {connect} from "react-redux";
import {Alert, Table} from "react-bootstrap";

class ShoppingCart extends Component {
    render() {
        const {shopping_cart, total} = this.props;
        const hasProducts = shopping_cart.length > 0
        return (
            <div
                className="container"
                style={{background: 'rgba(32,201,151,0.35)', padding: '20px'}}
            >
                <h3 style={{padding: '20px'}}>Seu Carrinho de Compras</h3>
                {!hasProducts ?
                    <Alert variant={'warning'}> Nenhum produto adicionado! </Alert>
                    :
                    <Table
                        bordered
                        striped
                        responsive
                        variant={'dark'}
                        style={{padding: '25px', textAlign: 'center'}}
                    >
                        <thead  key={"table-header"}>
                            <tr>
                                <th style={{width: "600px"}}>PRODUTOS</th>
                                <th style={{width: "10px"}}>PRECO</th>
                                <th style={{width: "10px"}}>QUANTIDADE</th>
                                <th style={{width: "10px"}}>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody  key={"table-body"}>
                        {shopping_cart.map(
                            (prod, id) => <ProductRow product={prod} key={id} />)}
                        </tbody>
                        <tfoot key={"table-footer"}>
                            <tr>
                                <th colSpan={3}>
                                    TOTAL:
                                </th>
                                <td>
                                    {`R$${total}`}
                                </td>

                            </tr>
                        </tfoot>
                    </Table>
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    shopping_cart: state.shopping_cart,
    total: state.shopping_cart.reduce((acc, item) => {
            return acc += state.products.find(prod => prod.id === item.id).price * item.quantity
    }, 0).toFixed(2)
})


export default connect(mapStateToProps)(ShoppingCart);
