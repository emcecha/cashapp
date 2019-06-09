import React from "react";

class CashappCashflowForm extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            formEditMode: this.props.formEditMode,
            category: "",
            description: "",
            date: this.getDateInInputDateFormat(),
            account: "All",
            amount: "",
            itemType: "",
            itemEditId: this.props.itemEditId
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
        return actualDate;
    }

    getDateInDateObject(dateInput) {
        let dateInputArr = dateInput.split("-");
        let year = Number(dateInputArr[0]);
        let month = Number(dateInputArr[1]) - 1;
        let day = Number(dateInputArr[2]);
        let dateObj = new Date(year,month,day,0,0,0,0).getTime();
        return dateObj;
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

        e.preventDefault();

        if (typeof this.props.onCancel === "function") {
            this.setState({
                category: "",
                description: "",
                date: this.getDateInInputDateFormat(),
                account: "All",
                amount: "",
                itemEditId: ""
            });
            this.props.onCancel();
        } else {
            return;
        }
    }

    getNewOrEditedItem() {

        let itemID;
        if (!this.state.formEditMode) {
            itemID = new Date().getTime();
        } else {
            console.log(this.state.itemEditId);
            itemID = this.state.itemEditId;
            console.log(itemID);
        }

        let category;
        if (this.state.category === "") {
            category = "Uncategorized";
        } else {
            category = this.state.category;
        }

        let description;
        if (this.state.description === "") {
            description = "-- no description --";
        } else {
            description = this.state.description;
        }

        let date;
        if (this.state.date === "") {
            let dateString = this.getDateInInputDateFormat();
            date = this.getDateInDateObject(dateString);
        } else {
            date = this.getDateInDateObject(this.state.date);
        }

        let itemType
        if (!this.state.formEditMode) {
            itemType = this.props.itemType;
        } else {
            itemType = this.state.itemType;
        }

        let newItem = {
            id: itemID,
            category: category,
            description: description,
            date: date,
            account: this.state.account,
            itemType: itemType,
            amount: this.state.amount
        }

        this.setState({
            category: "",
            description: "",
            date: this.getDateInInputDateFormat(),
            account: "All",
            amount: ""
        });

        return newItem;
    }

    handleClickOnActionButton = (e) => {

        e.preventDefault();

        let newItem = this.getNewOrEditedItem();
        if (newItem === undefined) {
            return;
        }

        if (this.state.formEditMode) {

            if (typeof this.props.onEditItem === "function") {
                this.props.onEditItem(newItem);
                console.log(newItem);
            } else {
                return;
            }

        } else {

            if (typeof this.props.onNewItem === "function") {
                this.props.onNewItem(newItem);
            } else {
                return;
            }

        }
    }

    componentDidUpdate(prevProps) {

        if (prevProps.itemEditId !== this.props.itemEditId && this.props.itemEditId !== "") {

            let itemArr = this.props.user.flowItems.filter((el) => {
                return el.id === this.props.itemEditId;
            });
            let item = itemArr[0];
            console.log(itemArr[0]);
            console.log(item);

            if (item.description === "-- no description --") {
                item.description = "";
            }

            let dateMiliSec = Number(item.date) + 86400000;
            console.log(item.itemType);
            this.setState({
                formEditMode: this.props.formEditMode,
                category: item.category,
                description: item.description,
                date: new Date(dateMiliSec).toISOString().slice(0,10),
                account: item.account,
                itemType: item.itemType,
                amount: item.amount,
                itemEditId: this.props.itemEditId
            });
        }
    }

    render() {

        let formClass;
        if (this.props.showForm) {
            formClass = "cashapp-cashflow-form slide-down"
        } else {
            formClass = "cashapp-cashflow-form"
        }

        let actionButton;
        if (this.props.formEditMode) {
            actionButton = (
                <button
                    className="button"
                    onClick={ this.handleClickOnActionButton }
                >
                    <i className="fas fa-save"></i>
                </button>
            )
        } else {
            actionButton = (
                <button
                    className="button"
                    onClick={ this.handleClickOnActionButton }
                >
                    <i className="fas fa-plus"></i>
                </button>
            )
        }

        return(
            <form className={ formClass }>
                <div className="cashapp-cashflow-form__input-box">
                    <select
                        value={ this.state.category }
                        onChange={ this.handleSelectCategory }
                        className="cashapp-cashflow-form__input cashapp-cashflow-form__input--category"
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
                        className="cashapp-cashflow-form__input cashapp-cashflow-form__input--description"
                    />
                    <input
                        type="date"
                        value={ this.state.date }
                        onChange={ this.handleInputDate }
                        className="cashapp-cashflow-form__input cashapp-cashflow-form__input--date"
                    />
                    <select
                        value={ this.state.account }
                        onChange={ this.handleSelectAccount }
                        className="cashapp-cashflow-form__input cashapp-cashflow-form__input--account"
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
                        className="cashapp-cashflow-form__input cashapp-cashflow-form__input--amount"
                        type="number"
                        min="0"
                        value={ this.state.amount }
                        onChange={ this.handleInputAmount }
                    />
                </div>
                <div className="cashapp-cashflow-form__button-box">
                    { actionButton }
                    <button
                        onClick={ this.handleClickOnCancel }
                        className="button"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </form>
        );
    }
}

export default CashappCashflowForm;
