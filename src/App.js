import HomePage from './pages/HomePage';
import Login from './pages/LogIn';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './styles/base.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Login} />
        <Route path='/homepage' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
