import { render } from 'inferno';
import App from './App';
import registerServiceWorker from "./registerServiceWorker";
import 'bulma/css/bulma.css';
import './index.css';

render(<App />, document.getElementById('app'));
registerServiceWorker();
