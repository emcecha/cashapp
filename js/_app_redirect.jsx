import React from "react";
import {Redirect} from "react-router-dom"

class AppRedirect extends React.Component {
    render() {
        console.log(this.props.test);
        return <Redirect to="/user" />
    }
}

export default AppRedirect;
