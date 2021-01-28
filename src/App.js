import React from 'react'
import './App.css';
import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shop/Shop'
import Header from './components/Header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp'
import {auth,createUserProfileDocument} from './firebase.util'
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state.currentUser);
        });
      }

      else {
        //it only fires when user is logged out bcz userAuth is only empty when the user is logged out
        console.log("LOG out",userAuth)
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/signin' component={SignInSignUp} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/' component={HomePage} />
          
          </Switch>
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
