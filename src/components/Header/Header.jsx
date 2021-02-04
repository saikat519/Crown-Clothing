import React from 'react'
import './Header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from "react-router-dom" 
import { auth } from '../../firebase.util'
import { connect } from 'react-redux';

function Header({ currentUser }) {
    console.log(currentUser)
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

                {currentUser ?
                    <div className='option' onClick={() => { auth.signOut() }}>SIGN OUT</div> :
                    <Link to='/signin' className='option'>
                        SIGNIN
                    </Link>
                }
               
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  });
  
export default connect(mapStateToProps)(Header);