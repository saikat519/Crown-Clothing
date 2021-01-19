import './App.css';
import HomePage from './pages/Homepage/Homepage'
import { BrowserRouter,Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
