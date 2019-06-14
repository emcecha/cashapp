import React from "react";

class CashappCashflowItem extends React.Component {

    handleClickOnEditItem = () => {

        if (typeof this.props.onEditItem !== "function") {
            return;
        }

        let id = this.props.item.id;
        this.props.onEditItem(id);
    }

    handleClickOnDeleteItem = () => {
        
        if (typeof this.props.onDeleteItem !== "function") {
            return;
        }

        let id = this.props.item.id;
        this.props.onDeleteItem(id);
    }

    render() {

        let itemDate = new Date(this.props.item.date).toLocaleDateString();
        let amountStyle;

        if (this.props.itemType === "profit") {
            amountStyle = {color: "#3CAEA3"}
        } else {
            amountStyle = {color: "#ED553B"}
        }

        return(
            <li
                className="cashapp-cashflow-item"
                key={ this.props.item.id }
            >
                <div className="cashapp-cashflow-item__button-box">
                    <button
                        onClick = { this.handleClickOnEditItem }
                        className="button-item"
                    >
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button
                        onClick = { this.handleClickOnDeleteItem }
                        className="button-item"
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
                <div className="cashapp-cashflow-item__content">
                    <div className="cashapp-cashflow-item__input cashapp-cashflow-item__input--category">
                        { this.props.item.category }
                    </div>
                    <div className="cashapp-cashflow-item__input cashapp-cashflow-item__input--description">
                        { this.props.item.description }
                    </div>
                    <div className="cashapp-cashflow-item__input cashapp-cashflow-item__input--date">
                        { itemDate }
                    </div>
                    <div className="cashapp-cashflow-item__input cashapp-cashflow-item__input--account">
                        { this.props.item.account }
                    </div>
                    <div className="cashapp-cashflow-item__input cashapp-cashflow-item__input--amount" style={ amountStyle }>
                        { this.props.item.itemType === "profit" ? this.props.item.amount : `-${this.props.item.amount }` }
                    </div>
                </div>
            </li>
        );
    }
}

export default CashappCashflowItem;
