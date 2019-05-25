import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import styles from "../scss/main.scss"

document.addEventListener("DOMContentLoaded", () => {

    class Main extends React.Component {
        render() {
            return(
                <div>Jedz warzywa.</div>
            );
        }
    }

    class App extends React.Component {
        render() {
            return(
                <HashRouter>
                    <div>
                        <Route exact path="/" component={ Main } />
                    </div>
                </HashRouter>
            );
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
});
