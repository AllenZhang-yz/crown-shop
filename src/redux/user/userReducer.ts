export interface ICurrentUser {
  id: string;
  [key: string]: string;
}

export interface IUserState {
  currentUser: ICurrentUser | null;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IUserState = {
  currentUser: null,
};
const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
