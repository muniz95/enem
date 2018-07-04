import { render } from 'inferno';
import App from './App';
import registerServiceWorker from "./registerServiceWorker";
import './index.css';

render(<App />, document.getElementById('app'));
registerServiceWorker();
