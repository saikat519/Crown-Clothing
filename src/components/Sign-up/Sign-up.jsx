import React,{ useState } from 'react'
import {useHistory} from 'react-router-dom'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase.util'
import './Sign-up.scss'

function SignUp() {

    const history = useHistory();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [displayName, setDisplayName] = useState('')
    
    const register = async(e) => {
        e.preventDefault();

        
        if (password !== password2) {
            alert("passwords don't match");
            return;
        }

         if (!password|| !password2 || !displayName || !email) {
            alert("Please Fill All the Fields");
            return;
        }
  
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserProfileDocument(user, { displayName });
  
        setDisplayName('');
        setEmail('');
        setPassword('')
        setPassword2('')
        history.push('/')  
      
        } catch (error) {
        console.error(error);
      
  }
  
    
    }
    return (
        <div className='sign-up'>
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>

            <form onSubmit={register}>
          <FormInput
            name='username'
            type='text'
            onChange={e => setDisplayName(e.target.value)}
            value={displayName}
            label='Display Name'
            required
            />
            <FormInput
            name='email'
            type='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
            label='Email'
            required
          />          
          <FormInput
                name='password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                label='Password'
                required
            />
            <FormInput
                name='password'
                type='password'
                value={password2}
                onChange={e => setPassword2(e.target.value)}
                label='Confirm Password'
                required
            />
          <CustomButton type='submit'> Sign Up </CustomButton>
        </form>
        </div>
    )
}

export default SignUp
