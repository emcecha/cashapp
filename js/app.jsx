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
import LandingPage from "./page/_landing_page.jsx";
import StartPage from "./page/_start_page.jsx";
import RegisterPage from "./page/_register_page.jsx";
import LogInPage from "./page/_login_page.jsx";
import Cashapp from "./application/_cashapp.jsx";

document.addEventListener("DOMContentLoaded", () => {

    class App extends React.Component {
        render() {
            return(
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={ LandingPage } />
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
