import React from "react";
import ButtonCautionSmall from "./_button_caution_small.jsx";

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
            <form className="contact-form">
                <label className="contact-form__label">Email</label>
                <input
                    className="contact-form__input"
                    type="email"
                    name="email"
                    value={ this.state.email }
                    onChange={ this.handleEmailChange }
                />
                <label className="contact-form__label">Message</label>
                <textarea
                    className="contact-form__input contact-form__input--textarea"
                    name="message"
                    value={ this.state.message }
                    onChange={ this.handleMessageChange }
                >
                </textarea>
                <div className="contact-form__button-box">
                    <ButtonCautionSmall text="SEND" />
                </div>
            </form>
        );
    }
}

export default ContactForm;
