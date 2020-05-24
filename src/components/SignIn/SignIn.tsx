import React, { useState, FormEvent, ChangeEvent, memo } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton//CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import GoogleLogo from '../../assets/GoogleLogo.png';
import './SignIn.style.scss';

interface ISignIn {
  email: string;
  password: string;
}

const SignIn: React.FC = memo(() => {
  const [signInInput, setSignInInput] = useState<ISignIn>({
    email: '',
    password: '',
  });

  const { email, password } = signInInput;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSignInInput({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
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
          value={email}
          label="email"
          handleChange={handleInputChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          handleChange={handleInputChange}
          required
        />
        <div className="button-wrapper">
          <CustomButton type="submit">sign in</CustomButton>
          {/* <div onClick={signInWithGoogle}> */}
          <img
            src={GoogleLogo}
            alt="google"
            className="google"
            onClick={signInWithGoogle}
          />
          {/* </div> */}
        </div>
      </form>
    </div>
  );
});

export default SignIn;
