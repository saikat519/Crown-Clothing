import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {auth,provider} from '../../firebase.util'
import './SignIn.scss';

function SignIn() {

  const history = useHistory();
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')


  const signInWithGoogle = () => {
    auth
        .signInWithPopup(provider)
      .then(result => {
        //console.log(result.user);
      })
      .catch(err => {
        alert(err.message)
      })

  };

  const login = async(e) => {
    e.preventDefault();
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('')
      setPassword('')
      history.push('/')
      
    } catch (error) {
      console.log(error);
    }

    }
  

  return (
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={login}>
        <FormInput
            name='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            label='email'
            required
        />
        <FormInput
            name='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            label='password'
            required
        />
        <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            
            <CustomButton type="button" className="google-btn" onClick={signInWithGoogle}>Sign in with Google</CustomButton>
        </div>  
                  
        </form>
        </div>
        

  )
}



export default SignIn;