import React from "react";
import ButtonCaution from "./_button_caution.jsx";
import ButtonBackSmall from "./_button_back_small.jsx";
import {Link, Redirect} from 'react-router-dom';
import User from "./_user.js";

class FormRegister extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            email: "",
            password: "",
            repeatPassword: ""
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

    createNewUser = (e) => {

        if (this.state.email === "") {
            e.preventDefault();
            return alert("Fill email field.");
        }
        if (this.state.password === "") {
            e.preventDefault();
            return alert("Set your password");
        }
        if (this.state.repeatPassword === "") {
            e.preventDefault();
            return alert("Repeat your password");
        }
        if (this.state.password !== this.state.repeatPassword) {
            e.preventDefault();
            return alert("Field Password and Reapeat Password don't match");
        }

        if (localStorage.getItem("users")) {

            let actualUsers = JSON.parse(localStorage.getItem("users"));

            let checkArr = actualUsers.filter((el) => {
                return el.email === this.state.email;
            });

            if (checkArr.length > 0) {
                e.preventDefault();
                return alert("There already is user with the same email address");
            }

        } else {

            let usersArray = [];
            localStorage.setItem("users",JSON.stringify(usersArray));
        }

        let newUser = new User(this.state.email, this.state.password);
        let usersArray = JSON.parse(localStorage.getItem("users"));
        let newUsersArray = [...usersArray, newUser];

        localStorage.setItem("activeUser", newUser.id);
        localStorage.setItem("users", JSON.stringify(newUsersArray));
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
                    <Link to="/cashapp/start">
                        <ButtonBackSmall text="BACK" />
                    </Link>
                    <Link to={ `/cashapp/user/${this.state.email}` } onClick={ this.createNewUser }>
                        <ButtonCaution text="REGISTER" />
                    </Link>
                </div>
            </form>
        );
    }
}

export default FormRegister;
