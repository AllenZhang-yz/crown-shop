import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { ICollection } from '../../redux/shop/shopReducer';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import './CollectionsOverview.style.scss';

const CollectionsOverview: React.FC = memo(() => {
  const collections = useSelector<RootState, { [key: string]: ICollection }>(
    (state) => state.shop
  );
  const collectionsArr = Object.keys(collections).map(
    (key) => collections[key]
  );
  return (
    <div className="collections-overview">
      {collectionsArr.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
});

export default CollectionsOverview;
