import React from "react";

class ButtonCaution extends React.Component {

    handleButtonClick = (e) => {

        if (typeof this.props.onClick !== "function") {
            return;
        } else {
            this.props.onClick(e);
        }
    }

    render() {

        return(
            <button
                className="button button--caution"
                onClick={ this.handleButtonClick }
            >
                { this.props.text }
            </button>
        );
    }
}

export default ButtonCaution;
