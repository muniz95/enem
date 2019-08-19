import { render } from 'inferno';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('app'));
registerServiceWorker();
