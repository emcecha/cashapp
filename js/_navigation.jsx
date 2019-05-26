import React from "react";

class Navigation extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            show: false
        }
    }

    handleItemClick = () => {

        if (this.state.show) {

            this.setState({
                show: false
            });

        } else {

            this.setState({
                show: true
            });
        }
    }

    render() {
        return(

            <nav
                className={ this.state.show ? "navigation show" : "navigation"}
            >
                <div
                    className="navigation__icon"
                    onClick={ this.handleItemClick }
                >
                    <div className="navigation__stripe navigation__stripe--top"></div>
                    <div className="navigation__stripe navigation__stripe--middle"></div>
                    <div className="navigation__stripe navigation__stripe--bottom"></div>
                </div>
                <ul className="navigation__list">
                    <li className="navigation__item">Home</li>
                    <li className="navigation__item">App</li>
                    <li className="navigation__item">Benefits</li>
                    <li className="navigation__item">Creator</li>
                    <li className="navigation__item">Contact</li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
