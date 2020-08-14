import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

import { connect } from 'react-redux'
import { filterProducts, getProducts } from '../actions/index'
import { addToCart } from '../actions/index'
import { getVisibleProducts } from '../reducers/products'
import { useState } from 'react'


export const ProductList = ({ filterProducts, getProducts, products, addToCart }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
    filterProducts(event.target.value.toUpperCase())
  }

  const createProductItems = () => {
    return products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
    )
  }

  const refresh = () => {
    setValue('')
    getProducts()
  }

  return (
    <>
      <div className='product-list' style={{ marginBottom: 15 }}>
        <div>
          <label>
            Tìm kiếm :
          <input className='filter-input' type='text' placeholder='Enter st to search' value={value} onChange={handleChange} />
          </label>
        </div>
        <div style={{ float: "left" }}>
          <button onClick={refresh}> Refresh Product List </button>
        </div>
      </div>
      <hr />
      <div className='product-list'>
        {createProductItems()}
      </div>
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.products)
  }
}

export default connect(mapStateToProps, { addToCart, filterProducts, getProducts })(ProductList)