import React from "react";
import CashappHeader from "./_cashapp_header.jsx";
import CashappLabelBox from "./_cashapp_label_box.jsx";
import CashappCashflow from "./_cashapp_cashflow.jsx";
import CashappChartBox from "./_cashapp_chart_box.jsx";

let us = JSON.parse(localStorage.getItem("users"));
us[0].accounts = [
    {
        name: "All",
        option: "zł",
        type: "default"
    }
];
let usStr = JSON.stringify(us);
localStorage.setItem("users", usStr);

class Cashapp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.loadUser()
        }
    }

    loadUser() {
        let activeUserId = localStorage.getItem("activeUser");
        let users = JSON.parse(localStorage.getItem("users"));
        let userIndex;
        let userArr = users.filter((el,index) => {
            if (el.id === activeUserId) {
                userIndex = index;
            }
            return el.id === activeUserId;
        });
        return userArr[0]
    }

    handleItemChange = () => {

        this.setState({
            user: this.loadUser()
        });
    }

    render() {

        return(
            <div className="cashapp">
                <CashappHeader />
                <div className="cashapp__content">
                    <nav className="cashapp__sidebar cashapp__sidebar--left">
                        <CashappLabelBox
                            title="Accounts"
                            items={ this.state.user.accounts }
                            showOptions={ true }
                            options={ ["zł","$"] }
                            onItemChange={ this.handleItemChange }
                        />
                        <CashappLabelBox
                            title="Categories"
                            items={ this.state.user.categories }
                            showOptions={ false }
                            options={ [] }
                            onItemChange={ this.handleItemChange }
                        />
                    </nav>
                    <main className="cashapp__main window">
                        <CashappCashflow />
                    </main>
                    <aside className="cashapp__sidebar cashapp__sidebar--right">
                        <CashappChartBox />
                        <CashappChartBox />
                    </aside>
                </div>
            </div>
        );
    }
}

export default Cashapp;
