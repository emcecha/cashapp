import React from "react";
import Navigation from "./_navigation.jsx";
import Header from "./_header.jsx";
import ActionField from "./_action_field.jsx";
import DecorationColumns from "./_decoration_columns.jsx"

class Hero extends React.Component {

    render() {

        return(
            <div className="hero">
                <div className="hero__top">
                    <Navigation />
                    <Header showSubtitle={ this.props.showSubtitle }/>
                    <ActionField address={ this.props.address }/>
                </div>
                <div className="hero__bottom">
                    <DecorationColumns
                        upsidedown={ false }
                        columnsParams={ this.props.columnsParams }
                    />
                </div>
            </div>
        );

    }

}

export default Hero;
