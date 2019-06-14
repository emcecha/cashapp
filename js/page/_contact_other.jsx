import React from "react";

class ContactOther extends React.Component {

    render() {

        let links = [
            {
                href: "#",
                iconUrl: "../img/email_icon.svg"
            },
            {
                href: "#",
                iconUrl: "../img/octocat_icon.svg"
            },
            {
                href: "#",
                iconUrl: "../img/linkedin_icon.svg"
            },
        ]

        return(
            <div className="contact-other">
                <div className="contact-other__text-box">
                    <h3 className="contact-other__lead">
                        Interested?
                        <br></br>
                        Have question?
                    </h3>
                    <p className="contact-other__text">
                        Don't hesitate, contact me by form or by other platforms.
                    </p>
                </div>
                <div className="contact-other__link-box">
                    { links.map((el,index) => {
                        return(
                            <a
                                href={ el.href }
                                style={ {backgroundImage: `url(${ el.iconUrl })`} }
                                className="contact-other__link"
                                key={ index }
                            >
                            </a>
                        );
                    }) }
                </div>
            </div>
        );
    }
}

export default ContactOther;
