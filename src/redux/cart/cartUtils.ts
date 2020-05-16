import { IItem } from '../../pages/ShopPage/ShopPage';

export interface ICartItem extends IItem {
  quantity: number;
}

export const addItemToCart = (cartItems: ICartItem[], cartItemToAdd: IItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
