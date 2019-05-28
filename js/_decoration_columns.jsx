import React from "react";

class DecorationColumns extends React.Component {

    render() {

        let columnsElements = this.props.columnsParams.map((el,index) => {

            let columnStyle = {
                height: el.height,
                backgroundColor: el.color
            }

            return(
                <div
                    key={ index }
                    style={ columnStyle }
                    className="columns__element">
                </div>
            );

        });

        let alignStyle;
        if (this.props.upsidedown) {
            alignStyle = "flex-start";
        } else {
            alignStyle = "flex-end"
        }

        return(
            <div
                style={ {alignItems: alignStyle} }
                className="columns"
            >
                { columnsElements }
            </div>
        );

    }

}

export default DecorationColumns;
