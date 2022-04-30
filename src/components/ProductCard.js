import React, {Component} from 'react'

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                img: '',
                title: '',
                subtitle: '',
                text: '',
                price: undefined,
                hasStock: false
            }
        }
    }

    componentDidMount() {
        const {product} = this.props;
        this.setState({...product})
    }

    render() {
        const {img, title, subtitle, text, price, hasStock} = this.state;
        return (
            <div className="card">
                <div className="card-body">
                    <img className="img-thumbnail"
                         src={img}
                         style={imgStyle}
                         alt={'Product'}
                    />
                    <h4 className="card-title">{title}</h4>
                    <h6 className="text-muted card-subtitle mb-2">{subtitle}</h6>
                    <p className="card-text">{text}</p>
                    <div className="row">
                        <div className="col text-center align-self-center">
                            <strong style={{fontSize: "20px"}}>{price}</strong>
                        </div>
                        <div className="col text-center">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                disabled={!hasStock}
                            >Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const imgStyle = {
    padding: '0px',
    marginBottom: '19px'
}


export default ProductCard
