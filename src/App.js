import './App.css';
import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shop/Shop'
import Header from './components/Header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/Sign-in/SignIn'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignIn} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
