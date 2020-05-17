import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppinIcon } from "../../assets/shopping-cart.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppinIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);