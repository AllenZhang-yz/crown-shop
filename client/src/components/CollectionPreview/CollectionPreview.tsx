import React, { memo } from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import { IItem } from '../../redux/shop/shopReducer';
import './CollectionPreview.style.scss';

interface ICollectionPreviewProps {
  title: string;
  items: IItem[];
}

const CollectionPreview: React.FC<ICollectionPreviewProps> = memo(
  ({ title, items }) => {
    return (
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    );
  }
);

export default CollectionPreview;
