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

        let buttonBox = (
            <div className="cashapp-label-box-item__button-box">
                <button
                    className="button-item"
                    onClick = { this.handleClickOnEditItem }
                >
                    <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                    className="button-item"
                    onClick = { this.handleClickOnDeleteItem }
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        );

        return(
            <li className="cashapp-label-box-item">
                <div className="cashapp-label-box-item__name">
                    { this.props.name }
                </div>
                { this.props.type === "custom" ? buttonBox : null }
            </li>
        );
    }
}

export default CashappLabelBoxItem;
