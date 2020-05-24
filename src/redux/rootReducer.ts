import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer, { IUserState } from './user/userReducer';
import cartReducer, { ICartState } from './cart/cartReducer';
import directoryReducer, { IDirectory } from './directory/directoryReducer';
import shopReducer, { ICollection } from './shop/shopReducer';

export interface RootState {
  user: IUserState;
  cart: ICartState;
  directory: IDirectory[];
  shop: { [key: string]: ICollection };
}

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
