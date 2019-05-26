import React from "react";
import ButtonCaution from "./_button_caution.jsx"

class ActionField extends React.Component {

    render() {

        if (this.props.address === "landing page") {

            return(
                <form className="action-field action-field--landing">
                    <ButtonCaution text="START" />
                </form>
            );
        }
    }
}

export default ActionField;
