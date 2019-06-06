import React from "react";
import CashappHeader from "./_cashapp_header.jsx";
import CashappLabelBox from "./_cashapp_label_box.jsx";
import CashappCashflow from "./_cashapp_cashflow.jsx";
import CashappChartBox from "./_cashapp_chart_box.jsx";

class Cashapp extends React.Component {
    render() {
        console.log(localStorage);
        return(
            <div className="cashapp">
                <CashappHeader />
                <div className="cashapp__content">
                    <nav className="cashapp__sidebar cashapp__sidebar--left">
                        <CashappLabelBox
                            title="Accounts"
                            defaultItems={ [{name: "All", option: "zł"}] }
                            showOptions={ true }
                            options={ ["zł","$"] }
                        />
                        <CashappLabelBox
                            title="Categories"
                            defaultItems={ [{name: "Uncategorized", option: ""}] }
                            showOptions={ false }
                            options={ [] }
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
