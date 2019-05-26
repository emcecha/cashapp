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

document.addEventListener("DOMContentLoaded", () => {

    class App extends React.Component {
        render() {
            return(
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={ LandingPage } />
                        
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
