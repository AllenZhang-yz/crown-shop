import React from 'react';
import { useSelector } from 'react-redux';
import { ICartItem } from '../../redux/cart/cartUtils';
import './CheckoutItem.style.scss';

interface ICheckoutItemProps {
  item: ICartItem;
}

const CheckoutItem: React.FC<ICheckoutItemProps> = ({
  item: { name, quantity, price, imageUrl },
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button">&#10006;</span>
    </div>
  );
};

export default CheckoutItem;
