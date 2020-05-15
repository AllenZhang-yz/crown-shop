import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './CartDropdown.style.scss';

const CartDropdown: React.FC = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
