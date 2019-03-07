import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import Container from "./Container/Container";
import About from "./About/About";

const App = () => {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <Switch>
                    <Redirect exact from="/" to="/bubbles" />
                    <Route exact path="/about" component={ About } />
                </Switch>
            </div>
        </div>
    )
};

export default App;

    //<Route exact path="/bubbles" component={  } />
    //<Container />
