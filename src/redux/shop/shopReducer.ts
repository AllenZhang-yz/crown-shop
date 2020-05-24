import { SHOP_DATA } from '../../Shop.data';

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

const initialState: { [key: string]: ICollection } = SHOP_DATA;

const shopReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
