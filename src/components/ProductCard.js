import React, {Component} from 'react'
import {connect} from "react-redux";
import {Card, Button, Image} from 'react-bootstrap'
import {addProduct} from "../store/shopping/actions";

export class ProductCard extends Component {

    render() {
        const {id, image, title, description, price} = this.props.product;
        const {addProduct, isSelected} = this.props;
        return (
                <Card
                    border={isSelected ? 'success' : ''}
                    title={'card of product'}
                    style={{
                        width: '18rem',
                        borderWidth: '4px',
                        borderStyle: 'outset'
                    }}>
                    <Card.Header>
                        <Image src={image} fluid thumbnail />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.length > 200 ? description.slice(0,200) + '...' : description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <span style={{paddingRight: '20px'}}>R${price}</span>
                        <Button
                            variant="primary"
                            disabled={isSelected}
                            onClick={() => addProduct(id)}
                        >Comprar</Button>
                    </Card.Footer>
                </Card>
        );
    }
}

const mapPropsToState = (state, props) => ({
    product: state.products.find(prod => prod.id === props.product.id),
    isSelected: state.shopping_cart.find(prod => prod.id === props.product.id)
})

const mapDispatchToProps = dispatch => ({
    addProduct: product_id => dispatch(addProduct(product_id))
})

export default connect(mapPropsToState, mapDispatchToProps)(ProductCard)
