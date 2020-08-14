import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

export const ProductItem = ({ product, onAddToCartClicked }) => {
    const addCartButton = <span className='add-to-cart fa fa-shopping-cart' style={{ marginTop: -10 }}></span>
    const addToCartButton = (product) => {
        return (
            <button
                onClick={onAddToCartClicked}
                disabled={product.inventory > 0 ? '' : 'disabled'}>
                {product.inventory > 0 ? addCartButton : 'Hết'}
            </button>
        )
    }

    return (
        <Product
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            inventory={product.inventory}
            brand={product.brand}
            button={addToCartButton(product)} />
    )
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
