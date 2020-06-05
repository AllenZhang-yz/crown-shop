import React, { useEffect, lazy } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import './ShopPage.styles.scss';
import { ICollection } from '../../redux/shop/shopReducer';

const CollectionsOverview = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverview')
);
const CollectionPage = lazy(() => import('../CollectionPage/CollectionPage'));

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage: React.FC = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const isFetching = useSelector<RootState, boolean>(
    (state) => state.shop.isFetching
  );
  const collections = useSelector<RootState, { [key: string]: ICollection }>(
    (state) => state.shop.collections
  );
  const loading = Object.keys(collections).length === 0;
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
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
};

export default ShopPage;
