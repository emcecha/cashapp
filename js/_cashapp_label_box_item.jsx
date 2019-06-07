import React from "react";

class CashappLabelBoxItem extends React.Component {

    handleClickOnEditItem = () => {
        if (typeof this.props.onEditItem === "function") {
            let item = this.props.name;
            let option = this.props.option;
            this.props.onEditItem(item,option);
        } else {
            return;
        }
    }

    handleClickOnDeleteItem = () => {
        if (typeof this.props.onDeleteItem === "function") {
            let item = this.props.name;
            this.props.onDeleteItem(item);
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
                    <button onClick = { this.handleClickOnDeleteItem }>
                        X
                    </button>
                </div>
            </li>
        );
    }
}

export default CashappLabelBoxItem;
