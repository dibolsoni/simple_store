import React, {Component} from 'react';
import ProductCard from "../components/ProductCard";
import {connect} from "react-redux";
import {CardGroup, Collapse, Row, Spinner} from "react-bootstrap";

export class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Lista de Produtos',
        }
    }


    makeColumn(product, index) {
        return (
            <ProductCard key={`column-${index}`} product={{id: product.id}}/>
        )
    }

    makeColumns() {
        const {products} = this.props;
        return products.map((product, index) => {
            return this.makeColumn(product, index)
        })
    }

    makeRow(partialColumns, key) {
        const {products} = this.props;
        return (
            <Collapse
                in={products.length > 0}
                dimension="width"
                mountOnEnter
                appear
                timeout={1000}
                key={`row-${key}`}
            >
                <CardGroup >
                    {partialColumns.map(col => col)}
                </CardGroup>
            </Collapse>
        )
    }

    makeRows(columns) {
        let rows = []
        for (let i = 0; i < columns.length; i += 3) {
            rows.push(
                this.makeRow(columns.slice(i, i + 3), `${i}-${i + 3}`)
            )
        }
        return rows
    }

    makeView() {
        const columns = this.makeColumns()
        return this.makeRows(columns)
    }


    render() {
        const {title} = this.state;
        const {products} = this.props;
        const hasProducts = products.length > 0
        return (
            <div
                key={"product-list"}
                className="container"
                style={containerStyle}
                aria-label={'Product List'}
            >
                <div className="row" key={"products-title"}>
                    <h1 style={titleStyle}>{title}</h1>
                </div>
                {hasProducts ?
                    this.makeView()
                    :
                    <Row className={"justify-content-md-center"}>
                        <Spinner animation={'border'} variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Row>
                }
            </div>
        )
    }
}

const containerStyle = {
    padding: '20px',
    paddingBottom: '60px'
}

const titleStyle = {
    padding: '20px',
    paddingTop: '48px'
}


const mapStateToProps = (state) => ({
    products: state.products
})


export default connect(mapStateToProps)(ProductList);
