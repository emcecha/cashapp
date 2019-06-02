import React from "react";
import ButtonCaution from "./_button_caution.jsx";
import ButtonBackSmall from "./_button_back_small.jsx";
import {Link} from 'react-router-dom';

class FormRegister extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleEmailChange = (e) => {

        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange = (e) => {

        this.setState({
            password: e.target.value
        });
    }

    handleRepeatPasswordChange = (e) => {

        this.setState({
            repeatPassword: e.target.value
        });
    }

    render() {

        return(
            <form className="form">
                <div className="form__input-box">
                    <label className="form__label">Email</label>
                    <input
                        className="form__input"
                        type="email"
                        name="email"
                        value={ this.state.email }
                        onChange={ this.handleEmailChange }
                    />
                </div>
                <div className="form__input-box">
                    <label className="form__label">Password</label>
                    <input
                        className="form__input form__input--password"
                        type="password"
                        name="password"
                        value={ this.state.password }
                        onChange={ this.handlePasswordChange }
                    />
                </div>
                <div className="form__input-box">
                    <label className="form__label">Repeat Password</label>
                    <input
                        className="form__input form__input--password"
                        type="password"
                        name="repeat-password"
                        value={ this.state.repeatPassword }
                        onChange={ this.handleRepeatPasswordChange }
                    />
                </div>
                <div className="form__button-box form__button-box--flex">
                    <Link to="/start">
                        <ButtonBackSmall text="BACK" />
                    </Link>
                    <Link to="/start/register">
                        <ButtonCaution text="REGISTER" />
                    </Link>
                </div>
            </form>
        );
    }
}

export default FormRegister;