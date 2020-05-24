import { sections as originalData } from '../../Directory.data';

export interface IDirectory {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IDirectory[] = originalData;

const directoryReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
