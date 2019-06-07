import React from "react";

class CashappLabelBoxForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formEditMode: this.props.formEditMode,
            itemName: "",
            itemOption: "",
            showOptions: this.props.showOptions,
            editedItemName: "",
            editedItemOption: ""
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

    getNewOrEditedItem(item,option) {

        if (option === "") {
            option = "zł";
        } else {
            option = this.state.itemOption;
        }

        let newItem = {
            name: item,
            option: option,
            type: "custom"
        }

        this.setState({
            itemName: "",
            itemOption: "",
            editedItemName: "",
            editedItemOption: ""
        });

        return newItem;
    }

    handleClickOnActionButton = (e) => {

        e.preventDefault();

        if (this.state.itemName === "") {
            return alert("Please, enter label name");
        }

        if (!this.state.formEditMode) {
            let checkArr = this.props.items.filter((el) => {
                let elNameLow = el.name.toLowerCase();
                let newNameLow = this.state.itemName.toLowerCase();
                return elNameLow === newNameLow;
            });

            if (checkArr.length > 0) {
                return alert(`Label ${this.state.itemName} already exists`);
            }
        }

        let newItem = this.getNewOrEditedItem(this.state.itemName, this.state.itemOption);

        if (this.state.formEditMode) {

            if (typeof this.props.onEditItem === "function") {
                this.props.onEditItem(newItem,this.props.editedItemName);
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

    handleClickOnCloseForm = (e) => {
        e.preventDefault();
        if (typeof this.props.onCloseForm === "function") {
            this.setState({
                itemName: "",
                itemOption: "",
                editedItemName: "",
                editedItemOption: ""
            });
            this.props.onCloseForm();
        } else {
            return;
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.editedItemName !== this.props.editedItemName) {
            this.setState({
                formEditMode: this.props.formEditMode,
                itemName: this.props.editedItemName,
                itemOption: this.props.editedItemOption
            });
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
        if (this.props.formEditMode) {
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
