import { render } from 'inferno';
import App from './App';
import registerServiceWorker from "./registerServiceWorker";
import 'purecss/build/base-min.css';
import './index.css';

render(<App />, document.getElementById('app'));
registerServiceWorker();
