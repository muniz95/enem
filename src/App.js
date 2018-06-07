import { Component } from 'inferno';
import './App.css';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
