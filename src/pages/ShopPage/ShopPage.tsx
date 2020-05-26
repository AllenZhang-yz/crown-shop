import React, { memo, useEffect, useState } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import { updateCollections } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import './ShopPage.styles.scss';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage: React.FC = memo(() => {
  const [loading, setLoading] = useState(true);
  const match = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
    // return () => {
    //   unsubscribeFromSnapShot();
    // };
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
});

export default ShopPage;
