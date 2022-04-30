import {Component} from 'react'
import CartButton from "../components/CartButton";

class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-dark navbar-expand-md sticky-top py-3"
                     style={navbarStyle}>
                    <div className="container">
                        <a className="navbar-brand d-flex align-items-center" href="/src/pages"><span
                            className="bs-icon-xs bs-icon-circle d-flex justify-content-center align-items-center me-2 bs-icon"
                            style={brandIconStyle}>
                            <i className="fas fa-shopping-bag text-center text-white"></i></span>
                            <span style={brandTextStyle}>LOJA SIMPLES</span>
                        </a>
                    <CartButton hasProducts={false} />
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



export default Navbar