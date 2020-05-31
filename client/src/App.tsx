import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSingUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { RootState } from './redux/rootReducer';
import { ICurrentUser } from './redux/user/userReducer';
import { checkUserSession } from './redux/user/userActions';

const App: React.FC = () => {
  const currentUser = useSelector<RootState, ICurrentUser | null>(
    (state) => state.user.currentUser
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
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
