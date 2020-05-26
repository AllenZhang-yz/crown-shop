import { ShopActionTypes } from './shopActionTypes';
import { ICollection } from './shopReducer';

export const updateCollections = (collectionsMap: {
  [key: string]: ICollection;
}) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
