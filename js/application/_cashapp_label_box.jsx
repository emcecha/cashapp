import React from "react";
import CashappLabelBoxItem from "./_cashapp_label_box_item.jsx";
import CashappLabelBoxForm from "./_cashapp_label_box_form.jsx";

class CashappLabelBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            formEditMode: false,
            editedItemName: "",
            editedItemOption: ""
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
            showForm: true,
            formEditMode: false
        });
    }

    handleNewItem = (newItem) => {

        if (typeof this.props.onItemChange !== "function") {
            return;
        }

        let newItemsArr = [...this.props.items, newItem];

        this.setLocalStorage(newItemsArr);
        this.handleCloseForm();
        this.props.onItemChange();
    }

    handleCloseForm = () => {
        this.setState({
            showForm: false,
            editedItemName: "",
            editedItemOption: ""
        });
    }

    handleEditItem = (item,option) => {
        this.setState({
            formEditMode: true,
            showForm: true,
            editedItemName: item,
            editedItemOption: option
        });
    }

    handleSaveItemEdition = (newItem,editedItemName) => {

        if (typeof this.props.onItemChange !== "function") {
            return;
        }

        let editedItemsArr = this.props.items.map((item) => {
            if (item.name.toLowerCase() === editedItemName.toLowerCase()) {
                item = newItem;
            }
            return item;
        });

        this.setLocalStorage(editedItemsArr);
        this.handleCloseForm();
        this.props.onItemChange();
    }

    handleDeleteItem = (deletedItemName) => {
        
        if (typeof this.props.onItemChange !== "function") {
            return;
        }

        let newItemsArr = this.props.items.filter((item,index,arr) => {
            return item.name !== deletedItemName;
        });

        this.setLocalStorage(newItemsArr);
        this.handleCloseForm();
        this.props.onItemChange();
    }

    render() {

        return(
            <div className="cashapp-label-box window">
                <div>
                    <div className="cashapp-label-box__header">
                        <h2 className="cashapp-label-box__title">
                            { this.props.title }
                        </h2>
                        <button
                            className="button button--small"
                            onClick={ this.handleShowForm }
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>

                    <CashappLabelBoxForm
                        formEditMode = { this.state.formEditMode }
                        editedItemName= { this.state.editedItemName }
                        editedItemOption= { this.state.editedItemOption }
                        items={ this.props.items }
                        showForm={ this.state.showForm }
                        showOptions={ this.props.showOptions }
                        options={ this.props.options }
                        onNewItem={ this.handleNewItem }
                        onCloseForm={ this.handleCloseForm }
                        onEditItem={ this.handleSaveItemEdition }
                    />
                </div>

                <ul className="cashapp-label-box__list">
                    {
                        this.props.items.map((el,index) => {
                            return(
                                <CashappLabelBoxItem
                                    name={ el.name }
                                    option={ el.option }
                                    key={ index + el.name }
                                    type={ el.type }
                                    onEditItem = { this.handleEditItem }
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

export default CashappLabelBox;
