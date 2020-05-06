import React, { useState, FormEvent, ChangeEvent } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton//CustomButton';
import './SignIn.style.scss';

interface ISignIn {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [signInInput, setSignInInput] = useState<ISignIn>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignInInput({ email: '', password: '' });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSignInInput({ ...signInInput, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span className="title">Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={signInInput.email}
          label="email"
          handleChange={handleInputChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={signInInput.password}
          label="password"
          handleChange={handleInputChange}
          required
        />
        <CustomButton type="submit">sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
