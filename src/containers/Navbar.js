import {Component} from 'react'
import CartButton from "../components/CartButton";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        const {hasProducts} = this.props;
        return (
            <header>
                <nav className="navbar navbar-dark navbar-expand-md sticky-top py-3"
                     style={navbarStyle}>
                    <div className="container">
                        <Link className="navbar-brand d-flex align-items-center" to="/"><span
                            className="bs-icon-xs bs-icon-circle d-flex justify-content-center align-items-center me-2 bs-icon"
                            style={brandIconStyle}>
                            <i className="fas fa-shopping-bag text-center text-white"></i></span>
                            <span style={brandTextStyle}>LOJA SIMPLES</span>
                        </Link>
                    <CartButton
                        hasProducts={hasProducts}
                    />
                    </div>
                </nav>
            </header>
        )
    }
}
const navbarStyle = {
    background: 'var(--bs-info)'
}
const brandIconStyle = {
    padding: '20px',
    width: '60px',
    height: '20px',
    background: '#295885'
}
const brandTextStyle = {
    color: '#ffffff',
    fontFamily: "'Abril Fatface', serif"
}

const mapStateToProps = (state) => ({
    hasProducts: state.shopping_cart.length > 0
})


export default connect(mapStateToProps)(Navbar)