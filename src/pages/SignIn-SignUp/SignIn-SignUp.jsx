import React from 'react';

import SignIn from '../../components/Sign-in/SignIn';
import SignUp from '../../components/Sign-up/Sign-up';

import './SignIn-SignUp.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;