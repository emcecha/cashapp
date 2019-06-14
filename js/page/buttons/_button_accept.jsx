import React from "react";

class ButtonAccept extends React.Component {

    handleButtonClick = (e) => {

        if (typeof this.props.onClick !== "function") {
            return;
        }

        this.props.onClick(e);
    }

    render() {

        return(
            <button
                className="button button--accept"
                onClick={ this.handleButtonClick }
            >
                { this.props.text }
            </button>
        );
    }
}

export default ButtonAccept;
