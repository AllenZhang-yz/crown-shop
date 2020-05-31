import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
// import './Header.style.scss';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from './Header.style';
import { RootState } from '../../redux/rootReducer';
import { ICurrentUser } from '../../redux/user/userReducer';
import { signOutStart } from '../../redux/user/userActions';

const Header: React.FC = memo(() => {
  const dispatch = useDispatch();
  const currentUser = useSelector<RootState, ICurrentUser | null>(
    (state) => state.user.currentUser
  );
  const cartHidden = useSelector<RootState, boolean>(
    (state) => state.cart.hidden
  );
  return (
    <HeaderContainer>
      <div>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        {currentUser && <span>Hello, {currentUser.displayName}</span>}
      </div>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!cartHidden && <CartDropdown />}
    </HeaderContainer>
  );
});

export default Header;
