import React from "react";

class Header extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            showSubtitle: this.props.showSubtitle
        }
    }

    render() {

        return(
            <div className="header">
                    <h1 className="header__title">
                        cashapp
                    </h1>
                    <h2 className="header__subtitle">
                        { this.state.showSubtitle ? "Take Control Over Your Cashflow" : "" }
                    </h2>
            </div>
        );
    }
}

export default Header;
