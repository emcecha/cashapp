import React from "react";

class CashappLabelBoxItem extends React.Component {

    handleClickOnEditItem = () => {
        if (typeof this.props.onEditItem === "function") {
            let item = this.props.name;
            this.props.onEditItem(item);
        } else {
            return;
        }
    }

    render() {
        return(
            <li>
                <div>
                    { this.props.name }
                </div>
                <div>
                    <button onClick = { this.handleClickOnEditItem }>
                        edit
                    </button>
                    <button>
                        X
                    </button>
                </div>
            </li>
        );
    }
}

export default CashappLabelBoxItem;
