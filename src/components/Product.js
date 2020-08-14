import React from 'react'
import PropTypes from 'prop-types'

export const Product = ({ image, brand, price, id, quantity, title, button, inventory }) => {
    return (
        <>
            <div className='product'>
                {image ? <div>
                    <img className='product-image' onClick={() => console.log(id)} src={image} alt={title} />
                </div> : ''}
                <div onClick={() => console.log(id)} style={{ marginTop: 30 }}>
                    <span className='product-price' style={{ color: '#ee4d2d' }}>$ {price} </span>
                    <span className='product-name'>{title}{quantity ? `x ${quantity}` : null}</span>
                    {button}
                </div>
                {inventory ? `Còn: ${inventory}` : null}
            </div>
        </>
    )
}

Product.propTypes = {
    brand: PropTypes.string,
    price: PropTypes.string,
    inventory: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string,
    button: PropTypes.node
}

export default Product