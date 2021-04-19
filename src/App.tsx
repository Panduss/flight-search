import React from 'react';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history'
import HomePage from "./components/Home";

const history = createBrowserHistory();

function App(): JSX.Element {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path='/home'><HomePage/></Route>
                    <Route path='/'><Redirect to="/home"/></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
