import { ICurrentUser } from './userReducer';
import { UserActionTypes } from './userActionTypes';

export const setCurrentUser = (user: ICurrentUser | null) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
