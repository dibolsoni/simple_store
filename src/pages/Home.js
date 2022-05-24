import React, {Component} from 'react'
import ProductList from "../containers/ProductList";
import {requestLoadProducts} from "../store/shopping/actions";
import {connect} from "react-redux";

class Home extends Component {
    componentDidMount() {
        const {loadProducts} = this.props;
        loadProducts()
    }

    render() {
        return (
            <div className="App">
                <div className="container" style={bodyStyle}>
                    <ProductList />
                </div>
            </div>
        );
    }
}

const bodyStyle = {
    backgroundColor: 'rgba(32,201,151,0.35)',
    fontFamily: 'Mulish, sans-serif'
}

const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(requestLoadProducts())
})

export default connect(null, mapDispatchToProps)(Home)