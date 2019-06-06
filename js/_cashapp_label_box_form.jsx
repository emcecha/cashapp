import React from "react";

class CashappLabelBoxForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newItemName: "",
            newItemOption: "",
            showOptions: this.props.showOptions,
            options: this.props.options
        }
    }

    handleInputNewItemNameOnChange = (e) => {
        this.setState({
            newItemName: e.target.value
        });
    }

    handleSelectNewItemOption = (e) => {
        this.setState({
            newItemOption: e.target.value
        });
    }

    handleClickOnAddNewItem = (e) => {

        e.preventDefault

        if (typeof this.props.onNewItem === "function") {

            let newItem = {
                name: this.state.newItemName,
                option: this.state.newItemOption
            }
            console.log(newItem);
            this.props.onNewItem(newItem);

        }else {
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

        return(
            <form className={ `cashapp-label-box-form ${showClass}` }>
                <div className="cashapp-label-box-form__input-box">
                    <label>
                        Name
                    </label>
                    <input
                        type="text"
                        value={ this.state.newItem }
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
                        value={ this.state.newItemOption }
                        onChange={ this.handleSelectNewItemOption }
                    >
                        { this.state.options.map((el) => {
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
                <button
                    onClick={ this.handleClickOnAddNewItem }
                >add</button>
                <button>^</button>
            </form>
        );
    }
}

export default CashappLabelBoxForm;
