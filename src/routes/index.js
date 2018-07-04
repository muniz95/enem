import Main from '../views/Main';
import Header from '../components/Header';
import Edition from '../views/Edition';
import Quiz from '../views/Quiz';
import { BrowserRouter, Route, Switch } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const Routes = () => (
  <BrowserRouter history={ browserHistory }>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/edition/:year/quiz" component={ Quiz } />
        <Route path="/edition/:year" component={ Edition } />
        <Route path="/" exact component={ Main } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
