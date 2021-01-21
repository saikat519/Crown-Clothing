import './App.css';
import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shop/Shop'
import { BrowserRouter,Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
