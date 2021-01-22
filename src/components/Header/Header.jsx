import React from 'react'
import './Header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from "react-router-dom" 

function Header() {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/shop' className='option'>
                    CONTACT
                </Link>
               
                <Link to='/signin' className='option'>
                    SIGNIN
                </Link>
            </div>
        </div>
    )
}

export default Header
