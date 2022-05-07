import React, {Component} from 'react'
import ProductRow from "../components/ProductRow";

const product = {
    index: 1,
    img: '',
    name: 'produto 01',
    price: '111',
    quantity: 10,
}

class ShoppingCart extends Component {
    render() {
        return (
            <div className="container" style={{background: 'rgba(32,201,151,0.35)'}}>
                <h3 style={{padding: '20px'}}>Seu Carrinho de Compras</h3>
                <div className={"table-responsive"} style={{padding: '25px', textAlign: 'center'}}>
                    <table className="table table-striped table-dark table-bordered">
                        <thead>
                        <tr>
                            <th style={{width: "600px"}}>PRODUTOS</th>
                            <th style={{width: "10px"}}>PRECO</th>
                            <th style={{width: "10px"}}>QUANTIDADE </th>
                            <th style={{width: "10px"}}>TOTAL</th>
                        </tr>
                        </thead>
                        <tbody>
                            <ProductRow product={product}/>
                            <ProductRow product={product}/>
                            <ProductRow product={product}/>
                            <ProductRow product={product}/>
                            <ProductRow product={product}/>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ShoppingCart
