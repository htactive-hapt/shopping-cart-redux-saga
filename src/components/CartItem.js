import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

export const CartItem = ({ id, image, price, quantity, title, onRemove }) => {
    return (
        <div className='product-list'>
            <Product
                price={price}
                quantity={quantity}
                title={title}
                button={
                    <button className='close'
                        onClick={onRemove}>
                        {' X '}
                    </button>
                } />
        </div>
    )
}

CartItem.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    title: PropTypes.string,
    onRemove: PropTypes.func.isRequired
}

export default CartItem