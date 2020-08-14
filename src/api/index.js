import axios from 'axios'
import { message } from 'antd'
const API_URL = 'https://5f194821e104860016bae927.mockapi.io/shoppe-cart/'

export const fetchAll = async () => {
    try {
        const res = await axios.get(API_URL)
        const data = await res.data
        return data
    } catch (e) {
        console.log(e)
    }
}

export const getProducts = () => {
    const products = fetchAll()
    return new Promise(resolve => {
        setTimeout(() => resolve(products), 1000)
    })
}

export const buyProducts = (cart) => {
    console.log(cart, 'cart');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Object.keys(cart.quantityById).length <= 2 ?
                resolve(cart) :
                message.info(`You can buy 2 items at maximum in a checkout`)
        }, 1000)
    })
}