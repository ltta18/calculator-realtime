import HomePage from './pages/HomePage';
import Login from './pages/LogIn';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './styles/base.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/homepage' component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
