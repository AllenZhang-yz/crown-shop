import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
