import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { auth } from '../../firebase/firebase.utils';
import './Header.style.scss';
import { RootState } from '../../redux/rootReducer';
import { ICurrentUser } from '../../redux/user/userReducer';

const Header: React.FC = () => {
  const currentUser = useSelector<RootState, ICurrentUser | null>(
    (state) => state.user.currentUser
  );
  const cartHidden = useSelector<RootState, boolean>(
    (state) => state.cart.hidden
  );
  console.log(currentUser);
  return (
    <div className="header">
      <div>
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        {currentUser && <span>Hello, {currentUser.displayName}</span>}
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <Link className="option" to="/signin" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!cartHidden && <CartDropdown />}
    </div>
  );
};

export default Header;
