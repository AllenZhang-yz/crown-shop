import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { RootState } from '../../redux/rootReducer';
import { ICollection } from '../../redux/shop/shopReducer';
import './CollectionPage.style.scss';

type ICollectionId = 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens';

interface RouteParams {
  collectionId: ICollectionId;
}

const CollectionPage: React.FC = memo(() => {
  const params = useParams<RouteParams>();
  const shopData = useSelector<RootState, { [key: string]: ICollection }>(
    (state) => state.shop
  );
  console.log('shopdata:', shopData);
  const collectionData = shopData[params.collectionId];
  console.log('collectionData', collectionData);
  const { title, items } = collectionData;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
});

export default CollectionPage;
