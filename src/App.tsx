import React from 'react';
import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./theme";
import {AirlineProvider} from "./hooks/useAirlines";

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <AirlineProvider>
                <Router>
                    <Switch>
                        <Route path='/home'><SearchPage/></Route>
                        <Route path='/'><Redirect to="/home"/></Route>
                    </Switch>
                </Router>
            </AirlineProvider>
        </ThemeProvider>
    );
}

export default App;
