import { ICurrentUser, IAction } from './userReducer';
import { UserActionTypes } from './userActionTypes';
import { ISignIn } from '../../components/SignIn/SignIn';
import { ISignUp } from '../../components/SignUp/SignUp';

export const googleSignInStart: () => IAction = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess: (user: ICurrentUser) => IAction = (
  user: ICurrentUser
) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: Error): IAction => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error.message,
});

export const emailSignInStart: (emailAndPassword: ISignIn) => IAction = (
  emailAndPassword: ISignIn
) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession: () => IAction = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart: () => IAction = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess: () => IAction = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure: (error: Error) => IAction = (error: Error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error.message,
});

export const signUpStart: (signUpInfo: ISignUp) => IAction = (
  signUpInfo: ISignUp
) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: signUpInfo,
});

export const signUpSuccess: (signUpInfo: ISignUp) => IAction = (
  signUpInfo: ISignUp
) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: signUpInfo,
});

export const signUpFailure: (error: Error) => IAction = (error: Error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error.message,
});
