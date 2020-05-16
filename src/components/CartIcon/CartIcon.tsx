import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.style.scss';

const CartIcon: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="cart-icon"
      onMouseEnter={() => dispatch(toggleCartHidden(false))}
      onMouseLeave={() => dispatch(toggleCartHidden(true))}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
