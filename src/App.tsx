import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSingUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import { auth } from './firebase/firebase.utils';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<object | null>(null);
  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );
    console.log(currentUser);
    return () => {
      unsubscribeFromAuth();
    };
  }, [currentUser]);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSingUpPage} />
      </Switch>
    </div>
  );
};

export default App;
