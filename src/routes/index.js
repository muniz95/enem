import Base from '../Base';
import Main from '../views/Main';
import Edition from '../views/Edition';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

export default function Routes() {
    return (
        <Router history={ browserHistory }>
            <Route component={ Base }>
                <IndexRoute component={ Main } />
                <Route path="/edition/:year" component={ Edition } />
            </Route>
        </Router>
    );
}

/*
*/