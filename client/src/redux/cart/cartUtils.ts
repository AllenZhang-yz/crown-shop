import { IItem } from '../../redux/shop/shopReducer';

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

export const clearItemFromCart = (
  cartItems: ICartItem[],
  cartItemToClear: ICartItem
) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const removeItemFromCart = (
  cartItems: ICartItem[],
  cartItemToRemove: ICartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem?.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
