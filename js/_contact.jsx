import React from "react";
import ContactForm from "./_contact_form.jsx";
import ContactOther from "./_contact_other.jsx";

class Contact extends React.Component {

    render() {
        return(
            <section className="contact">
                <h2 className="contact__title">
                    CONTACT
                </h2>
                <div className="contact__container">
                    <ContactForm />
                    <ContactOther />
                </div>
            </section>
        );
    }
}

export default Contact;
