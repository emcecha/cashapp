import React from "react";
import CashappCashflowForm from "./_cashapp_cashflow_form.jsx";
import CashappCashflowItem from "./_cashapp_cashflow_item.jsx";

class CashappCashflow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            formEditMode: false,
            itemEditId: ""
        }
    }

    handleShowFormProfit = () => {
        this.setState({
            showForm: true,
            itemType: "profit"
        })
    }

    handleShowFormExpense = () => {
        this.setState({
            showForm: true,
            itemType: "expense"
        })
    }

    handleHideForm = () => {
        this.setState({
            showForm: false,
            formEditMode: false,
            itemEditId: ""
        })
    }

    handleEditItem = (itemEditId) => {
        this.setState({
            formEditMode: true,
            showForm: true,
            itemEditId: itemEditId
        });
    }

    handleDeleteItem = (deletedItemId) => {
        if (typeof this.props.onItemChange === "function") {
            let newItemsArr = this.props.user.flowItems.filter((item) => {
                return item.id !== deletedItemId;
            });
            this.setLocalStorage(newItemsArr);
            this.handleHideForm();
            this.props.onItemChange();
        } else {
            return;
        }
    }

    setLocalStorage(element) {

        let activeUserId = localStorage.getItem("activeUser");
        let users = JSON.parse(localStorage.getItem("users"));
        let key = this.props.title;

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === activeUserId) {
                users[i][key] = element;
            }
        }

        localStorage.setItem("users", JSON.stringify(users));
    }

    handleNewItem = (newItem) => {
        if (typeof this.props.onItemChange === "function") {
            let newItemsArr = [...this.props.user.flowItems, newItem];
            this.setLocalStorage(newItemsArr);
            this.handleHideForm();
            this.props.onItemChange();
        }
    }

    handleSaveItemEdition = (editedItem) => {
        if (typeof this.props.onItemChange === "function") {
            let editedItemsArr = this.props.user.flowItems.map((item) => {
                if (item.id === editedItem.id) {
                    item = editedItem;
                }
                return item;
            });
            this.setLocalStorage(editedItemsArr);
            this.handleHideForm();
            this.props.onItemChange();
        }
    }

    render() {
        return(
            <div className="cashapp-cashflow">
                <div className="cashapp-cashflow__header-box">
                    <div className="cashapp-cashflow__header">
                        <h2 className="cashapp-cashflow__title">
                            Cashflow
                        </h2>
                        <div>
                            <button
                                onClick={ this.handleShowFormProfit }
                                className="button button--profit"
                            >
                                <i className="fas fa-plus"></i>
                            </button>
                            <button
                                onClick={ this.handleShowFormExpense }
                                className="button button--expense"
                            >
                                <i className="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <ul className="cashapp-cashflow__list-header">
                        <li>Category</li>
                        <li>Description</li>
                        <li>Date</li>
                        <li>Account</li>
                        <li>Amount</li>
                    </ul>
                </div>
                <CashappCashflowForm
                    formEditMode={ this.state.formEditMode }
                    user={ this.props.user }
                    showForm={ this.state.showForm }
                    itemType={ this.state.itemType }
                    onCancel={ this.handleHideForm }
                    onNewItem={ this.handleNewItem }
                    onEditItem={ this.handleSaveItemEdition }
                    itemEditId={ this.state.itemEditId }
                />
                <ul className="cashapp-cashflow__list">
                    {
                        this.props.user.flowItems.map((el) => {
                            return(
                                <CashappCashflowItem
                                    item={ el }
                                    key={ el.id }
                                    itemType={ el.itemType }
                                    onEditItem={ this.handleEditItem }
                                    onDeleteItem={ this.handleDeleteItem }
                                />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default CashappCashflow;
