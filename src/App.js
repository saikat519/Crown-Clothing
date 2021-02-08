import React from 'react'
import './App.css'
import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shop/Shop'
import Header from './components/Header/Header'
import Checkout from './pages/Checkout/Checkout'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp'
import { auth, createUserProfileDocument } from './firebase.util'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {
   
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          });

        });
      }

      else {
        //it only fires when user is logged out bcz userAuth is only empty when the user is logged out
        console.log("LOG out",userAuth)
        this.props.setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <BrowserRouter>
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={Checkout} />
        <Route
          exact
          path='/signin'
          render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInSignUp />
            )
          }
        />
      </Switch>
    </div>
      </BrowserRouter>
    );
  }
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);