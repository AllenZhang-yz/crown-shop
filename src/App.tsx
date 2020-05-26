import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSingUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';
import { RootState } from './redux/rootReducer';
import { ICurrentUser } from './redux/user/userReducer';
// import { ICollection } from './redux/shop/shopReducer';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector<RootState, ICurrentUser | null>(
    (state) => state.user.currentUser
  );
  // const collections = useSelector<RootState, { [key: string]: ICollection }>(
  //   (state) => state.shop
  // );
  // const collectionsArr = Object.keys(collections).map(
  //   (key) => collections[key]
  // );

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapShot) => {
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
        });
      }
      dispatch(setCurrentUser(null));
      // addCollectionAndDocuments('collections', collectionsArr);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSingUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
