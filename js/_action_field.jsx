import React from "react";
import ButtonCaution from "./_button_caution.jsx";
import ButtonAccept from "./_button_accept.jsx";
import ButtonBackSmall from "./_button_back_small.jsx";
import FormRegister from "./_form_register.jsx";
import FormLogIn from "./_form_login.jsx";
import {Link} from 'react-router-dom';

class ActionField extends React.Component {

    render() {

        if (this.props.address === "landing") {

            return(
                <div className="action-field action-field--landing">
                    <Link to="/cashapp/start">
                        <ButtonCaution text="START" />
                    </Link>
                </div>
            );
        }

        if (this.props.address === "start") {

            return(
                <div className="action-field action-field--start">
                    <div className="action-field__button-box">
                        <p className="action-field__text">
                            If you are new
                        </p>
                        <Link to="/cashapp/start/register">
                            <ButtonCaution text="REGISTER" />
                        </Link>
                    </div>
                    <div className="action-field__button-box">
                        <p className="action-field__text">
                            If you have an account
                        </p>
                        <Link to="/cashapp/start/login">
                            <ButtonAccept text="LOG IN" />
                        </Link>
                    </div>
                    <div className="action-field__button-box">
                        <Link to="/cashapp">
                            <ButtonBackSmall text="BACK" />
                        </Link>
                    </div>
                </div>
            );
        }

        if (this.props.address === "register") {

            return(
                <div className="action-field action-field--register">
                    <FormRegister />
                </div>
            );
        }

        if (this.props.address === "login") {

            return(
                <div className="action-field action-field--login">
                    <FormLogIn />
                </div>
            );
        }
    }
}

export default ActionField;
