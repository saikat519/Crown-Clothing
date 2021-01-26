import React,{ useEffect,useState } from 'react'
import './App.css';
import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shop/Shop'
import Header from './components/Header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/Sign-in/SignIn'
import {auth} from './firebase.util'

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        setCurrentUser(authUser)
        //console.log(currentUser);
      } 
    });
  }, [currentUser]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/' component={HomePage} />
          
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
