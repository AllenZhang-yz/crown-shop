import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { RootState } from '../../redux/rootReducer';
import { ICartItem } from '../../redux/cart/cartUtils';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.style.scss';

const CartDropdown: React.FC = () => {
  const cartItems = useSelector<RootState, ICartItem[]>(
    (state) => state.cart.cartItems
  );
  const dispatch = useDispatch();
  return (
    <div
      className="cart-dropdown"
      onMouseEnter={() => dispatch(toggleCartHidden(false))}
      onMouseLeave={() => dispatch(toggleCartHidden(true))}
    >
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
