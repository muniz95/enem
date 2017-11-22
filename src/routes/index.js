import Base from '../Base';
import Main from '../views/Main';
import Edition from '../views/Edition';
import Quiz from '../views/Quiz';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const Routes = () => (
    <Router history={ browserHistory }>
        <Route component={ Base }>
            <IndexRoute component={ Main } />
            <Route path="/edition/:year" component={ Edition } />
            <Route path="/edition/:year/quiz" component={ Quiz } />
        </Route>
    </Router>
);

export default Routes;
/*
*/