import React from "react";

class CashappLabelBoxForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemName: this.props.startNameValue,
            itemOption: this.props.startOptionValue,
            showOptions: this.props.showOptions
        }
    }

    handleInputNewItemNameOnChange = (e) => {
        this.setState({
            itemName: e.target.value
        });
    }

    handleSelectNewItemOption = (e) => {
        this.setState({
            itemOption: e.target.value
        });
    }

    handleClickOnActionButton = (e) => {

        e.preventDefault();

        if (typeof this.props.onNewItem === "function") {

            if (this.state.itemName === "") {
                return alert("Please, enter label name");
            }

            let checkArr = this.props.items.filter((el) => {
                let elNameLow = el.name.toLowerCase();
                let newNameLow = this.state.itemName.toLowerCase();
                return elNameLow === newNameLow;
            });

            if (checkArr.length > 0) {
                return alert(`Label ${this.state.itemName} already exists`);
            }

            let newItem = {
                name: this.state.itemName,
                option: this.state.itemOption,
                type: "custom"
            }

            this.setState({
                itemName: "",
                itemOption: ""
            }, this.props.onNewItem(newItem));

        } else {
            return;
        }
    }

    handleClickOnCloseForm = () => {
        if (typeof this.props.onCloseForm === "function") {
            this.setState({
                itemName: "",
                itemOption: ""
            });
            this.props.onCloseForm();
        } else {
            return;
        }
    }

    render() {

        let displayStyle;
        if (this.state.showOptions) {
            displayStyle = { display: "block" };
        } else {
            displayStyle = { display: "none" };
        }

        let showClass;
        if (this.props.showForm) {
            showClass ="slide-down";
        } else {
            showClass = "";
        }

        let actionButton;
        if (this.props.mode) {
            actionButton = (
                <button
                    onClick={ this.handleClickOnActionButton }
                >
                    edit
                </button>
            )
        } else {
            actionButton = (
                <button
                    onClick={ this.handleClickOnActionButton }
                >
                    add
                </button>
            )
        }

        console.log(actionButton);

        console.log("render");

        return(
            <form className={ `cashapp-label-box-form ${showClass}` }>
                <div className="cashapp-label-box-form__input-box">
                    <label>
                        Name
                    </label>
                    <input
                        type="text"
                        value={ this.state.itemName }
                        onChange={ this.handleInputNewItemNameOnChange }
                    />
                </div>
                <div
                    className="cashapp-label-box-form__input-box"
                    style={ displayStyle }
                >
                    <label>
                        Options
                    </label>
                    <select
                        value={ this.state.itemOption }
                        onChange={ this.handleSelectNewItemOption }
                    >
                        { this.props.options.map((el) => {
                            return(
                                <option
                                    key={ el }
                                    value={ el }
                                >
                                    { el }
                                </option>
                            );
                        }) }
                    </select>
                </div>
                { actionButton }
                <button
                    onClick={ this.handleClickOnCloseForm }
                >^</button>
            </form>
        );
    }
}

export default CashappLabelBoxForm;
