import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignIn.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSignin = event => {
    event.preventDefault();
    
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
      return (
    <div className="signin__signup">
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSignin}>
            <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
            />
            <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
            />
            <div className='buttons'>
                <CustomButton type='submit'> Sign in </CustomButton>
                
                <CustomButton className="google-btn">Sign in with Google</CustomButton>
            </div>  
                      
            </form>
            </div>
            
        <div className='sign-up'>
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <form>
          <FormInput
            name='username'
            type='text'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Display Name'
            required
            />
            <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />          
          <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='Password'
                required
            />
            <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='Confirm Password'
                required
            />
          <CustomButton type='submit'> Sign Up </CustomButton>
        </form>
        </div>
              

        </div>
    );
  }
}

export default SignIn;