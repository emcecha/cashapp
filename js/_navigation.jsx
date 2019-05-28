import React from "react";

class Navigation extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            show: false
        }
    }

    handleHamburgerClick = () => {

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

    handleItemClick = (e) => {

        let id = e.target.dataset.id;
        let sectionPosition = document.getElementById(id).offsetTop - 50;

        this.setState({
            show: false
        });

        window.scrollTo(0,sectionPosition);
    }

    render() {
        return(

            <nav
                className={ this.state.show ? "navigation show" : "navigation"}
            >
                <div
                    className="navigation__icon"
                    onClick={ this.handleHamburgerClick }
                >
                    <div className="navigation__stripe navigation__stripe--top"></div>
                    <div className="navigation__stripe navigation__stripe--middle"></div>
                    <div className="navigation__stripe navigation__stripe--bottom"></div>
                </div>
                <ul className="navigation__list">
                    { this.props.navItems.map((el,index) => {
                        return(
                            <li
                                className="navigation__item"
                                key={ el.name }
                                data-id={ el.id }
                                onClick={ this.handleItemClick }
                            >
                                { el.name }
                            </li>
                        );
                    }) }
                </ul>
            </nav>
        );
    }
}

export default Navigation;
