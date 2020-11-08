import logo from './logo.svg';
import './App.css';
import './styles/base.css';
import 'antd/dist/antd.css';
import Calculator from './components/calculator/Calculator';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
