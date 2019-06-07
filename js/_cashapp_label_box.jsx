import React from "react";
import CashappLabelBoxItem from "./_cashapp_label_box_item.jsx";
import CashappLabelBoxForm from "./_cashapp_label_box_form.jsx";

class CashappLabelBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            formEditMode: false,
            startNameValue: "",
            startOptionValue: ""
        }
    }

    setLocalStorage(element) {

        let activeUserId = localStorage.getItem("activeUser");
        let users = JSON.parse(localStorage.getItem("users"));
        let key = this.props.title.toLowerCase();

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === activeUserId) {
                users[i][key] = element;
            }
        }

        localStorage.setItem("users", JSON.stringify(users));
    }

    handleShowForm = () => {
        this.setState({
            showForm: true
        });
    }

    handleNewItem = (newItem) => {

        if (typeof this.props.onItemChange === "function") {

            let newItemsArr = [...this.props.items, newItem];

            this.setLocalStorage(newItemsArr)
            this.handleCloseForm();
            this.props.onItemChange();
        }
    }

    handleCloseForm = () => {
        this.setState({
            showForm: false
        });
    }

    handleEditItem = () => {
        this.setState({
            formEditMode: true,
            showForm: true
        });
    }

    handleSaveItemEdition = () => {

    }

    handleDeleteItem = () => {

    }

    render() {

        console.log(this.props.items);

        return(
            <div className="cashapp-label-box window">

                <div>

                </div>

                <div>

                    <div className="cashapp-label-box__header">
                        <h2>{ this.props.title }</h2>
                        <button
                            onClick={ this.handleShowForm }
                        >
                        +
                        </button>
                    </div>

                    <CashappLabelBoxForm
                        formEditMode = { this.state.formEditMode }
                        startNameValue= { this.props.startNameValue }
                        startOptionValue= { this.props.startOptionValue }
                        items={ this.props.items }
                        showForm={ this.state.showForm }
                        showOptions={ this.props.showOptions }
                        options={ this.props.options }
                        onNewItem={ this.handleNewItem }
                        onCloseForm={ this.handleCloseForm }
                        onEditItem={ this.handleSaveItemEdition }
                    />

                    <ul>
                        {
                            this.props.items.map((el,index) => {
                                return(
                                    <CashappLabelBoxItem
                                        name={ el.name }
                                        key={ index + el.name }
                                        type={ el.type }
                                        onEditItem = { this.handleEditItem }
                                    />
                                );
                            })
                        }
                    </ul>

                </div>

            </div>
        );
    }
}

export default CashappLabelBox;
