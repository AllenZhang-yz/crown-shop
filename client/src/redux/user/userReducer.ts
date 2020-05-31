import { Action, Reducer } from 'redux';
import { UserActionTypes } from './userActionTypes';
import { ISignIn } from '../../components/SignIn/SignIn';
import { ISignUp } from '../../components/SignUp/SignUp';

export interface ICurrentUser {
  id: string;
  [key: string]: string;
}

export interface IUserState {
  currentUser: ICurrentUser | null;
  error: string | null;
}

export interface IAction extends Action {
  type: string;
  payload?: ICurrentUser | null | string | ISignIn | ISignUp;
}

const initialState: IUserState = {
  currentUser: null,
  error: null,
};
const userReducer: Reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      if (action.payload) {
        return {
          ...state,
          currentUser: action.payload as ICurrentUser,
          error: null,
        };
      }
      return state;
    case UserActionTypes.SIGN_OUT_SUCCESS:
      // case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      if (action.payload) {
        return {
          ...state,
          error: action.payload as string,
        };
      }
      return state;
    default:
      return state;
  }
};

export default userReducer;
