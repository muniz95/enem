import Component from 'inferno-component';
import './registerServiceWorker';
import './App.css';
import Header from './components/Header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
