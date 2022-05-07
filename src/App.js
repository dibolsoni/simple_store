import React from 'react'
import {Outlet} from "react-router";
import {Route, Routes} from "react-router-dom";

import Navbar from "./containers/Navbar";
import Footer from "./containers/Footer";

import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";



function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/carrinho-de-compras" element={<ShoppingCart />}/>
                <Route path="*" element={<NoMatch />}/>
            </Route>
        </Routes>
    );
}

const Layout = () => (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
)

const NoMatch = () => {
    window.location.href = '/'
}

export default App;


