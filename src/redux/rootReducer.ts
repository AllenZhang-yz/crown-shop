import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import { IUserState } from './user/userReducer';

export interface RootState {
  user: IUserState;
}

export default combineReducers({
  user: userReducer,
});
