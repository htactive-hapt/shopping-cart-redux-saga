import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../actions/index'
import { getTotal, getCartProducts, getCheckoutError, isCheckoutPending } from '../reducers'

export const Cart = ({ products, total, error, checkoutPending, checkout, removeFromCart }) => {

    const cartItems = (products) => {
        return products.length <= 0 ?
            <h3 className='text-center'><em>Mua hàng.</em></h3> :
            products.map(product =>
                <CartItem
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                    key={product.id}
                    onRemove={() => removeFromCart(product.id)} />
            )
    }
    const checkoutAllowed = products.length > 0 && !checkoutPending

    return (
        <div>
            <h3 className='text-center'><strong>Cart</strong></h3>
            <div>{cartItems(products)}</div>
            <h3 className='text-center'><p>Tổng: $ {total}</p></h3>
            <button
                onClick={checkout}
                disabled={checkoutAllowed ? '' : 'disabled'}>
                Thanh toán
        </button>
            <div style={{ color: 'red' }}>{error}</div>
        </div>
    )
}

Cart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string,
    error: PropTypes.string,
    checkoutPending: PropTypes.bool,
    checkout: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        products: getCartProducts(state),
        total: getTotal(state),
        error: getCheckoutError(state),
        checkoutPending: isCheckoutPending(state)
    }
}

export default connect(mapStateToProps, { checkout, removeFromCart })(Cart)