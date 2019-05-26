import React from "react";

class ButtonCaution extends React.Component {

    render() {

        return(
            <button className="button button--caution">
                { this.props.text }
            </button>
        );
    }
}

export default ButtonCaution;
