import React from 'react';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history'
import SearchPage from "./pages/SearchPage";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./theme";

const history = createBrowserHistory();

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Switch>
                    <Route path='/home'><SearchPage/></Route>
                    <Route path='/'><Redirect to="/home"/></Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
