import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { ICartItem } from '../../redux/cart/cartUtils';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import './CheckoutPage.style.scss';

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector<RootState, ICartItem[]>(
    (state) => state.cart.cartItems
  );
  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
