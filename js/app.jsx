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
import Cashapp from "./_cashapp.jsx";
import AppRedirect from "./_app_redirect.jsx";

document.addEventListener("DOMContentLoaded", () => {

    class App extends React.Component {
        render() {
            return(
                <HashRouter>
                    <Switch>
                        <Route exact path="/cashapp" component={ LandingPage } />
                        <Route exact path="/cashapp/start" component={ StartPage } />
                        <Route exact path="/cashapp/start/register" component={ RegisterPage } />
                        <Route exact path="/cashapp/start/login" component={ LogInPage } />
                        <Route exact path="/cashapp/user/:userID" component={ Cashapp } />
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
