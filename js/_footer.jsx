import React from "react";
import DecorationColumns from "./_decoration_columns.jsx";

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <DecorationColumns
                    upsidedown={ false }
                    columnsParams={ this.props.columnsParams }
                />
                <p className="footer__text">
                    cashapp 2019 by emcecha
                </p>
            </footer>
        );
    }
}

export default Footer;
