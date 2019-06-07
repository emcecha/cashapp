import React from "react";

class CashappCashflowForm extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            category: "Uncategorized",
            description: "",
            date: this.getDateInInputDateFormat(),
            account: "All",
            amount: ""
        }
    }

    getDateInInputDateFormat() {
        let dateObj = new Date();
        let day = dateObj.getDate().toString();
        day.length === 1 ? day = "0" + day : day;
        let month = (dateObj.getMonth() + 1).toString();
        month.length === 1 ? month = "0" + month : month;
        let year = dateObj.getFullYear().toString();
        let actualDate = `${year}-${month}-${day}`;
        console.log(actualDate);
        return actualDate;
    }

    handleSelectCategory = (e) => {
        this.setState({
            category: e.target.value
        });
    }

    handleInputDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    handleInputDate = (e) => {
        this.setState({
            date: e.target.value
        });
    }

    handleSelectAccount = (e) => {
        this.setState({
            account: e.target.value
        });
    }

    handleInputAmount = (e) => {
        this.setState({
            amount: e.target.value
        });
    }

    handleClickOnCancel = (e) => {
        if (typeof this.props.onCancel === "function") {
            this.setState({
                description: "",
                amount: ""
            });
            this.props.onCancel();
        } else {
            return;
        }
    }

    render() {
        console.log(this.props.user);

        let formClass;
        if (this.props.showForm) {
            formClass = "cashapp-cashflow-form slide-down"
        } else {
            formClass = "cashapp-cashflow-form"
        }

        return(
            <form className={ formClass }>
                <div>
                    <select
                        value={ this.state.category }
                        onChange={ this.handleSelectCategory }
                    >
                        { this.props.user.categories.map((el) => {
                            return(
                                <option
                                    key={ el.name }
                                    value={ el.name }
                                >
                                    { el.name }
                                </option>
                            );
                        }) }
                    </select>
                    <input
                        type="text"
                        value={ this.state.description }
                        onChange={ this.handleInputDescription }
                    />
                    <input
                        type="date"
                        value={ this.state.date }
                        onChange={ this.handleInputDate }
                    />
                    <select
                        value={ this.state.account }
                        onChange={ this.handleSelectAccount }
                    >
                        { this.props.user.accounts.map((el) => {
                            return(
                                <option
                                    key={ el.name }
                                    value={ el.name }
                                >
                                    { el.name }
                                </option>
                            );
                        }) }
                    </select>
                    <input
                        type="number"
                        min="0"
                        value={ this.state.amount }
                        onChange={ this.handleInputAmount }
                    />
                </div>
                <div>
                    <button>add</button>
                    <button
                        onClick={ this.handleClickOnCancel }
                    >/cancel</button>
                </div>
            </form>
        );
    }
}

export default CashappCashflowForm;
