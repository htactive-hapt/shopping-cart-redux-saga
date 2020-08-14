import React from 'react'
import ProductList from './ProductList'
import Header from './Header'
import Cart from './Cart'
import '../App.css'

export const App = () => {
    return (
        <div>
            <Header />
            <hr />
            <br />
            <ProductList />
            <hr />
            <Cart />
        </div>
    )
}
export default App
