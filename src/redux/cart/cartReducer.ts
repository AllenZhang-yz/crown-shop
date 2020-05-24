import { CartActionTypes } from './cartActionTypes';
import {
  ICartItem,
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from './cartUtils';
import { IItem } from '../../redux/shop/shopReducer';

export interface ICartState {
  hidden: boolean;
  cartItems: ICartItem[];
}

interface IAction {
  type: string;
  payload: IItem | ICartItem | boolean;
}

const initialState: ICartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action: IAction) => {
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
    default:
      return state;
  }
};

export default cartReducer;
