import { CartActionTypes } from './cartActionTypes';
import { ICartItem, addItemToCart } from './cartUtils';
import { IItem } from '../../pages/ShopPage/ShopPage';

export interface ICartState {
  hidden: boolean;
  cartItems: ICartItem[];
}

interface IAction {
  type: string;
  payload: IItem | boolean;
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
    default:
      return state;
  }
};

export default cartReducer;
