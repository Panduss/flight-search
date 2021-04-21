import React from 'react';
import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./theme";
import {StoreProvider} from "./hooks/useStore";

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <StoreProvider>
                <Router>
                    <Switch>
                        <Route path='/home'><SearchPage/></Route>
                        <Route path='/'><Redirect to="/home"/></Route>
                    </Switch>
                </Router>
            </StoreProvider>
        </ThemeProvider>
    );
}

export default App;
