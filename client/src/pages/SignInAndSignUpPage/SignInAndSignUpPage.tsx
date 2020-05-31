import React, { memo } from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInAndSignUpPage.style.scss';

const SignInAndSignUpPage: React.FC = memo(() => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
});

export default SignInAndSignUpPage;
