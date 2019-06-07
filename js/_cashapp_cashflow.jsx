import React from "react";
import CashappCashflowForm from "./_cashapp_cashflow_form.jsx";

class CashappCashflow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: false
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
            showForm: false
        })
    }

    render() {
        return(
            <div className="cashapp-cashflow">
                <div className="cashapp-cashflow__header">
                    <div>
                        <h2>{ this.props.activeLabel }</h2>
                        <div>
                            <button
                                onClick={ this.handleShowFormProfit }
                            >profit</button>
                            <button
                                onClick={ this.handleShowFormProfit }
                            >/expense</button>
                        </div>
                    </div>
                    <ul className="">
                        <li>Category</li>
                        <li>Description</li>
                        <li>Date</li>
                        <li>Account</li>
                        <li>Amount</li>
                    </ul>
                </div>
                <CashappCashflowForm
                    user={ this.props.user }
                    showForm={ this.state.showForm }
                    itemType={ this.state.itemType }
                    onCancel={ this.handleHideForm }
                />
                <ul className="cashapp-cashflow__list">

                </ul>
            </div>
        );
    }
}

export default CashappCashflow;
