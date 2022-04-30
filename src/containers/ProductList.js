import React, {Component} from 'react';
import ProductCard from "../components/ProductCard";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Produtos',
            products: []
        }
    }

    componentDidMount() {
        const {products} = this.props;
        this.setState({
            products: [...products]
        })
    }

    makeColumn(product, index) {
        return (
            <div
                className="col-md-4"
                style={colStyle}
                key={`column-${index}`}
            >
                <ProductCard product={product} />
            </div>
        )
    }

    makeColumns() {
        const {products} = this.state;
        return products.map((product, index) => {
            return this.makeColumn(product, index)
        })
    }

    makeRow(partialColumns) {
        return (
            <div className="row">
                {partialColumns.map(col => col)}
            </div>
        )
    }

    makeRows(columns) {
        let rows = []
        for (let i=0; i < columns.length; i+=3) {
            rows.push(
                this.makeRow(columns.slice(i, i+3))
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
        const view = this.makeView()
        return (
            <div className="container"
                 style={containerStyle}
                 aria-label={'Product List'}
            >
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={titleStyle}>{title}</h1>
                    </div>
                </div>
                {this.makeView()}
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

const colStyle = {
    padding: '12px',
}


export default ProductList;
