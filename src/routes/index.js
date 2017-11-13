import Base from '../Base';
import Main from '../views/Main';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

export default function Routes() {
    return (
        <Router history={ browserHistory }>
            <Route component={ Base }>
                <IndexRoute component={ Main }/>
            </Route>
        </Router>
    );
}

/*
<Route path="/about" component={ About }>
    <Route path="/about/teammembers/:person" component={ TeamMember }/>
</Route>
*/