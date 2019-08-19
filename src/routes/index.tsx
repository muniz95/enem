import { BrowserRouter, Route, Switch } from 'inferno-router';
import Header from '../components/Header';
import Edition from '../views/Edition';
import Main from '../views/Main';
import Quiz from '../views/Quiz';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/edition/:year/quiz" component={Quiz} />
        <Route path="/edition/:year" component={Edition} />
        <Route path="/" exact component={Main} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
