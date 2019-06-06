import React from "react";

class CashappLabelBoxItem extends React.Component {
    render() {
        return(
            <li>
                <div>
                    { this.props.name }
                </div>
                <div>
                    <button>
                        edit
                    </button>
                    <button>
                        X
                    </button>
                </div>
            </li>
        );
    }
}

export default CashappLabelBoxItem;
