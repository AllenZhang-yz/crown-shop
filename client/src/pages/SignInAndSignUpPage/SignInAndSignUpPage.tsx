import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInAndSignUpPage.style.scss';

const SignInAndSignUpPage: React.FC = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <div className="sign-up">
        <SignUp />
      </div>
    </div>
  );
};

export default SignInAndSignUpPage;
