import { CartActionTypes } from './cartActionTypes';
import { IItem } from '../shop/shopReducer';
import { IAction } from './cartReducer';
import { ICartItem } from '../../redux/cart/cartUtils';

export const toggleCartHidden = (hidden: boolean) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: hidden,
});

export const addItem: (item: IItem) => IAction = (item: IItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart: (item: ICartItem) => IAction = (
  item: ICartItem
) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem: (item: ICartItem) => IAction = (item: ICartItem) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearCart: () => IAction = () => ({
  type: CartActionTypes.CLEAR_CART,
});
