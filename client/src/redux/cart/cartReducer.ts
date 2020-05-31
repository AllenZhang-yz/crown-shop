import { CartActionTypes } from './cartActionTypes';
import {
  ICartItem,
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from './cartUtils';
import { IItem } from '../../redux/shop/shopReducer';
import { Action, Reducer } from 'redux';

export interface ICartState {
  hidden: boolean;
  cartItems: ICartItem[];
}

export interface IAction extends Action {
  type: string;
  payload?: IItem | ICartItem | boolean;
}

const initialState: ICartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer: Reducer<ICartState, IAction> = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: action.payload as boolean,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload as IItem),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(
          state.cartItems,
          action.payload as ICartItem
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(
          state.cartItems,
          action.payload as ICartItem
        ),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
