import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import { IItem } from '../../pages/ShopPage/ShopPage';
import './CollectionPreview.style.scss';

interface ICollectionPreviewProps {
  title: string;
  items: IItem[];
}

const CollectionPreview: React.FC<ICollectionPreviewProps> = ({
  title,
  items,
}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.splice(0, 4).map(({ ...props }) => (
          <CollectionItem key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
