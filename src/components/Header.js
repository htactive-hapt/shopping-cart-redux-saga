import React from 'react'
import capture from '../assets/Capture.PNG'

const Header = () => {
    return (
        <div className='header'>
            <img src={capture} className='header-logo' alt='Nothing to see' />
            <div className='menu-left'>
                <a href='https://banhang.shopee.vn/'>Kênh Người Bán</a>
                <a href='https://shopee.vn/web'>Tải ứng dụng</a>
                <a href='a'>Kết nối</a>
                <a href='https://www.facebook.com/ShopeeVN'><i className='fa fa-facebook'></i></a>
                <a href='https://www.facebook.com/ShopeeVN'><i className='fa fa-instagram'></i></a>
            </div>
            <div className='menu-right'>
                <a href='https://banhang.shopee.vn/'><i className='fa fa-bell'></i> Thông Báo</a>
                <a href='https://help.shopee.vn/s/'><i className='fa fa-question'></i> Trợ Giúp</a>
                <a href='https://shopee.vn/buyer/login/signup?next=https%253A%252F%252Fshopee.vn%252F '>Đăng Ký</a>
                <a href='https://shopee.vn/buyer/login?next=https%253A%252F%252Fshopee.vn%252F'>Đăng Nhập</a>
            </div>
            <div className='shopping-cart'>
                <a href='shopping-cart'><i className='fa fa-shopping-cart'></i></a>
            </div>
        </div >
    )
}

export default Header