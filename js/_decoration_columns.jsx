import React from "react";

class DecorationColumns extends React.Component {

    render() {

        let columnsElements = this.props.columnsParams.map((el,index) => {

            let style = {
                height: el.height,
                backgroundColor: el.color
            }

            return(
                <div key={ index } style={ style } className="columns__element">
                </div>
            );

        });

        return(
            <div
                style={ {alignItems: "flex-end"} }
                className="columns"
            >
                { columnsElements }
            </div>
        );

    }

}

export default DecorationColumns;
