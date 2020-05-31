import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../redux/cart/cartActions';
import { IItem } from '../../redux/shop/shopReducer';
import './CollectionItem.style.scss';

interface ICollectionItem {
  item: IItem;
}

const CollectionItem: React.FC<ICollectionItem> = memo(({ item }) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
});

export default CollectionItem;
