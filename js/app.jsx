import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import styles from "../scss/main.scss";
import LandingPage from "./_landing_page.jsx";
import StartPage from "./_start_page.jsx";
import RegisterPage from "./_register_page.jsx";
import LogInPage from "./_login_page.jsx";

document.addEventListener("DOMContentLoaded", () => {

    class App extends React.Component {
        render() {
            return(
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={ LandingPage } />
                        <Route exact path="/start" component={ StartPage } />
                        <Route exact path="/start/register" component= { RegisterPage } />
                        <Route exact path="/start/login" component= { LogInPage } />
                    </Switch>
                </HashRouter>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
});
