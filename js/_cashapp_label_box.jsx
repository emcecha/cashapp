import React from "react";
import CashappLabelBoxItem from "./_cashapp_label_box_item.jsx";
import CashappLabelBoxForm from "./_cashapp_label_box_form.jsx";

class CashappLabelBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultItems: this.props.defaultItems,
            items: [],
            showForm: false
        }
    }

    handleShowForm = () => {
        this.setState({
            showForm: true
        });
    }

    handleNewItem = (newItem) => {
        let newItemsArr = [...this.state.items, newItem];
        this.setState({
            items: newItemsArr
        }, () => {
            this.handleCloseForm()
        });
    }

    handleCloseForm = () => {
        this.setState({
            showForm: false
        });
    }

    render() {

        let listItems = [...this.state.defaultItems,...this.state.items];

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
                        showForm={ this.state.showForm }
                        showOptions={ this.props.showOptions }
                        options={ this.props.options }
                        onNewItem={ this.handleNewItem }
                        onCloseForm={ this.handleCloseForm }
                    />

                    <ul>
                        {
                            listItems.map((el,index) => {
                                return(
                                    <CashappLabelBoxItem
                                        name={ el.name }
                                        key={ index + el.name }
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
