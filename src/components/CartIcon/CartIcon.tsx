import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { RootState } from '../../redux/rootReducer';
import { ICartItem } from '../../redux/cart/cartUtils';
import './CartIcon.style.scss';

const CartIcon: React.FC = memo(() => {
  const cartItems = useSelector<RootState, ICartItem[]>(
    (state) => state.cart.cartItems
  );
  const itemCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  const dispatch = useDispatch();
  return (
    <div
      className="cart-icon"
      onMouseEnter={() => dispatch(toggleCartHidden(false))}
      onMouseLeave={() => dispatch(toggleCartHidden(true))}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
});

export default CartIcon;
