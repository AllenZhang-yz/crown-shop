import { ICurrentUser } from './userReducer';
export const setCurrentUser = (user: ICurrentUser | null) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
