import { CartActionTypes } from './cartActionTypes';

export interface ICartState {
  hidden: boolean;
}

interface IAction {
  type: string;
}

const initialState: ICartState = {
  hidden: true,
};

const cartReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
