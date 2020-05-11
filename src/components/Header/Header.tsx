import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './Header.style.scss';
import { RootState } from '../../redux/rootReducer';
import { ICurrentUser } from '../../redux/user/userReducer';

const Header: React.FC = () => {
  const currentUser = useSelector<RootState, ICurrentUser | null>(
    (state) => state.user.currentUser
  );
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
