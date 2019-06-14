import React from "react";
import DecorationColumns from "./_decoration_columns.jsx";

class Spacer extends React.Component {
    render() {
        return(
            <div className="spacer">
                <DecorationColumns
                    columnsParams={ this.props.columnsParams }
                    upsidedown={ true }
                />
            </div>
        );
    }
}

export default Spacer;
