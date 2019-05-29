import React from "react";
import ButtonCaution from "./_button_caution.jsx";
import ButtonAccept from "./_button_accept.jsx";
import ButtonBackSmall from "./_button_back_small.jsx";
import {Link} from 'react-router-dom';

class ActionField extends React.Component {

    render() {

        if (this.props.address === "landing page") {

            return(
                <div className="action-field action-field--landing">
                    <Link to="/start">
                        <ButtonCaution
                            text="START"
                        />
                    </Link>
                </div>
            );
        }

        if (this.props.address === "start page") {

            return(
                <div className="action-field action-field--start">
                    <div className="action-field__button-box">
                        <p className="action-field__text">
                            If you are new
                        </p>
                        <Link to="/start/register">
                            <ButtonCaution text="REGISTER" />
                        </Link>
                    </div>
                    <div className="action-field__button-box">
                        <p className="action-field__text">
                            If you a have an account
                        </p>
                        <ButtonAccept text="LOG IN" />
                    </div>
                    <div className="action-field__button-box">
                        <Link to="/">
                            <ButtonBackSmall text="BACK" />
                        </Link>
                    </div>
                </div>
            );
        }

        if (this.props.address === "register page") {

            return(
                <div className="action-field action-field--register">
                    <div className="action-field__button-box">
                        <Link to="/start/register">
                            <ButtonCaution text="REGISTER" />
                        </Link>
                        <Link to="/start">
                            <ButtonBackSmall text="BACK" />
                        </Link>
                    </div>
                </div>
            );
        }
    }
}

export default ActionField;
