import React from "react";

class ButtonBackSmall extends React.Component {

    handleButtonClick = (e) => {

        if (typeof this.props.onClick !== "function") {
            return
        } else {
            this.props.onClick(e);
        }
    }

    render() {

        return(
            <button
                className="button button--back button--small"
                onClick={ this.handleButtonClick }
            >
                { this.props.text }
            </button>
        );
    }
}

export default ButtonBackSmall;
