import Base from '../Base';
import Main from '../views/Main';
import Edition from '../views/Edition';
import Quiz from '../views/Quiz';
import { BrowserRouter, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const Routes = () => (
    <BrowserRouter history={ browserHistory }>
        <Route component={ Base }>
            <Route path="/" component={ Main } />
            <Route path="/edition/:year" component={ Edition } />
            <Route path="/edition/:year/quiz" component={ Quiz } />
        </Route>
    </BrowserRouter>
);

export default Routes;
/*
*/