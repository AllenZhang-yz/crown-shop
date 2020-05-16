import React from 'react';
import { ICartItem } from '../../redux/cart/cartUtils';
import './CartItem.style.scss';

interface ICartItemProps {
  item: ICartItem;
}

const CartItem: React.FC<ICartItemProps> = ({
  item: { imageUrl, name, quantity, price },
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
