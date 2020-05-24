import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { ICartItem } from '../../redux/cart/cartUtils';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cartActions';
import './CheckoutItem.style.scss';

interface ICheckoutItemProps {
  item: ICartItem;
}

const CheckoutItem: React.FC<ICheckoutItemProps> = memo(({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(item))}
      >
        &#10006;
      </span>
    </div>
  );
});

export default CheckoutItem;
