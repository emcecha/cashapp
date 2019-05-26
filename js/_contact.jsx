import React from "react";
import ButtonCaution from "./_button_caution.jsx"

class Contact extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            email: "",
            message: "",
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
            <div className="contact">
                <h2 className="contact__title">
                    CONTACT
                </h2>
                <form className="contact__form">
                    <label className="contact__label">Email</label>
                    <input
                        className="contact__input"
                        type="email"
                        name="email"
                        value={ this.state.email }
                        onChange={ this.handleEmailChange }
                    />
                    <label className="contact__label">Message</label>
                    <textarea
                        className="contact__input contact__input--textarea"
                        name="message"
                        value={ this.state.message }
                        onChange={ this.handleMessageChange }
                    >
                    </textarea>
                    <ButtonCaution text="SEND" />
                </form>
            </div>
        );
    }
}

export default Contact;
