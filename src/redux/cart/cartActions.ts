import { CartActionTypes } from './cartActionTypes';
import { IItem } from '../../pages/ShopPage/ShopPage';

export const toggleCartHidden = (hidden: boolean) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: hidden,
});

export const addItem = (item: IItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
