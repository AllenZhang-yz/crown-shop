import { CartActionTypes } from './cartActionTypes';
import { IItem } from '../shop/shopReducer';
import { ICartItem } from '../../redux/cart/cartUtils';

export const toggleCartHidden = (hidden: boolean) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: hidden,
});

export const addItem = (item: IItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: ICartItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item: ICartItem) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
