import React, { useState, FormEvent, ChangeEvent, memo } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signUpStart } from '../../redux/user/userActions';

import './SignUp.styles.scss';

export interface ISignUp {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialSignUpInput = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp: React.FC = memo(() => {
  const [signUpInput, setSignUpInput] = useState<ISignUp>(initialSignUpInput);
  const { displayName, email, password, confirmPassword } = signUpInput;
  const dispatch = useDispatch();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    dispatch(signUpStart(signUpInput));
    setSignUpInput(initialSignUpInput);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpInput({ ...signUpInput, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
});

export default SignUp;
