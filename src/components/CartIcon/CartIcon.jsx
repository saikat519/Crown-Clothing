import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = (props) => (
  <div className='cart-icon' onClick={props.toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{props.itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// const mapStateToProps = state => ({
//   itemCount: selectCartItemsCount(state)
// });

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);