// import { SHOP_DATA } from '../../Shop.data';
import { ShopActionTypes } from './shopActionTypes';

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

interface IAction {
  type: string;
  payload: any;
}

const initialState: { [key: string]: ICollection } = {};

const shopReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
