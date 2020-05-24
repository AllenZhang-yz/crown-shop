import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { RootState } from '../../redux/rootReducer';
import { ICartItem } from '../../redux/cart/cartUtils';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.style.scss';

const CartDropdown: React.FC = memo(() => {
  const cartItems = useSelector<RootState, ICartItem[]>(
    (state) => state.cart.cartItems
  );
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div
      className="cart-dropdown"
      onMouseEnter={() => dispatch(toggleCartHidden(false))}
      onMouseLeave={() => dispatch(toggleCartHidden(true))}
    >
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
});

export default CartDropdown;
