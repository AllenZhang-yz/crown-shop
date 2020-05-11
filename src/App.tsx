import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSingUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';

const App: React.FC = () => {
  // const [currentUser, setCurrentUser] = useState<ICurrentUser | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapShot) => {
          // dispatch({ id: snapShot.id, ...snapShot.data() });
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
        });
      }
      dispatch(setCurrentUser(null));
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
        <Route path="/signin" component={SignInAndSingUpPage} />
      </Switch>
    </div>
  );
};

export default App;
