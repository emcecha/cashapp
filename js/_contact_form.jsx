import React from "react";
import ButtonCaution from "./_button_caution.jsx";

class ContactForm extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            email: "",
            message: ""
        }
    }

    handleEmailChange = (e) => {

        this.setState({
            email: e.target.value
        });
    }

    handleMessageChange = (e) => {

        this.setState({
            message: e.target.value
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
                    <label className="form__label">Message</label>
                    <textarea
                        className="form__input form__input--textarea"
                        name="message"
                        value={ this.state.message }
                        onChange={ this.handleMessageChange }
                    >
                    </textarea>
                </div>
                <div className="form__button-box">
                    <ButtonCaution text="SEND" />
                </div>
            </form>
        );
    }
}

export default ContactForm;
