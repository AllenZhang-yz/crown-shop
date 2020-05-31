// import { SHOP_DATA } from '../../Shop.data';
import { ShopActionTypes } from './shopActionTypes';
import { Reducer, Action } from 'redux';

export interface IItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: IItem[];
}

type ErrorMessage = string | undefined;

export interface IShopState {
  collections: { [key: string]: ICollection };
  isFetching: boolean;
  errorMessage: ErrorMessage;
}

export interface IAction extends Action {
  type: string;
  payload?: { [key: string]: ICollection } | ErrorMessage;
}

const initialState: IShopState = {
  collections: {},
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer: Reducer<IShopState, IAction> = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload as { [key: string]: ICollection },
        isFetching: false,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload as ErrorMessage,
      };
    default:
      return state;
  }
};

export default shopReducer;
