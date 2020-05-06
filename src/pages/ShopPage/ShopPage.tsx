import React, { useState } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { SHOP_DATA } from '../../Shop.data';
import './ShopPage.styles.scss';

export interface IItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: IItem[];
}

const ShopPage: React.FC = () => {
  const [collections, setCollections] = useState<ICollection[]>(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

export default ShopPage;
