import React from 'react'
import './Header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from "react-router-dom" 
import { auth } from '../../firebase.util'
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


function Header({ currentUser,hidden }) {
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
                {currentUser && <CartIcon />}
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
export default connect(mapStateToProps)(Header);

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//     currentUser,
//     hidden
//   });
  
//   export default connect(mapStateToProps)(Header);