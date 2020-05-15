import { combineReducers } from 'redux';
import userReducer, { IUserState } from './user/userReducer';
import cartReducer, { ICartState } from './cart/cartReducer';

export interface RootState {
  user: IUserState;
  cart: ICartState;
}

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
