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

            if (typeof this.props.onEditItem !== "function") {
                return;
            }

            this.props.onEditItem(newItem,this.props.editedItemName);

        } else {

            if (typeof this.props.onNewItem !== "function") {
                return;
            }

            this.props.onNewItem(newItem);
        }
    }

    handleClickOnCloseForm = (e) => {

        e.preventDefault();

        if (typeof this.props.onCloseForm !== "function") {
            return;
        }

        this.setState({
            itemName: "",
            itemOption: "",
            editedItemName: "",
            editedItemOption: ""
        });

        this.props.onCloseForm();
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

        let widthStyle;
        if (this.state.showOptions) {
            widthStyle = { width: "75%" };
        } else {
            widthStyle = { width: "100%" };
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
                    className="button button--small"
                    onClick={ this.handleClickOnActionButton }
                >
                    <i className="fas fa-save"></i>
                </button>
            )
        } else {
            actionButton = (
                <button
                    className="button button--small"
                    onClick={ this.handleClickOnActionButton }
                >
                    <i className="fas fa-plus"></i>
                </button>
            )
        }

        return(
            <form className={ `cashapp-label-box-form ${showClass}` }>
                <div className="cashapp-label-box-form__input-box">
                    <input
                        className="cashapp-label-box-form__input-text"
                        type="text"
                        value={ this.state.itemName }
                        onChange={ this.handleInputNewItemNameOnChange }
                        style={ widthStyle }
                    />
                    <select
                        className="cashapp-label-box-form__input-select"
                        value={ this.state.itemOption }
                        onChange={ this.handleSelectNewItemOption }
                        style={ displayStyle }
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
                <div className="cashapp-label-box-form__button-box">
                    { actionButton }
                    <button
                        className="button button--small"
                        onClick={ this.handleClickOnCloseForm }
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </form>
        );
    }
}

export default CashappLabelBoxForm;
