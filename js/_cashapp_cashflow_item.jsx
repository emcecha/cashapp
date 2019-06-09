import React from "react";

class CashappCashflowItem extends React.Component {

    handleClickOnEditItem = () => {
        if (typeof this.props.onEditItem === "function") {
            let id = this.props.item.id;
            this.props.onEditItem(id);
        } else {
            return;
        }
    }

    handleClickOnDeleteItem = () => {
        if (typeof this.props.onDeleteItem === "function") {
            let id = this.props.item.id;
            this.props.onDeleteItem(id);
        } else {
            return;
        }
    }

    render() {

        let itemDate = new Date(this.props.item.date).toLocaleDateString();

        return(
            <li
                key={ this.props.item.id }
            >
                <div>
                    <button onClick = { this.handleClickOnEditItem }>
                        edit
                    </button>
                    <button onClick = { this.handleClickOnDeleteItem }>
                        /delete
                    </button>
                </div>
                <div>
                    <div>
                        { this.props.item.category }
                    </div>
                    <div>
                        { this.props.item.description }
                    </div>
                    <div>
                        { itemDate }
                    </div>
                    <div>
                        { this.props.item.account }
                    </div>
                    <div>
                        { this.props.item.itemType === "profit" ? this.props.item.amount : `-${this.props.item.amount }` }
                    </div>
                </div>
            </li>
        );
    }
}

export default CashappCashflowItem;
