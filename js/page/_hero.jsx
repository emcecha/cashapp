import React from "react";
import Header from "./_header.jsx";
import ActionField from "./_action_field.jsx";
import DecorationColumns from "./_decoration_columns.jsx"

class Hero extends React.Component {

    render() {

        let classValues = {
            landing: "hero--landing",
            start: "hero--st-reg-log",
            register: "hero--st-reg-log",
            login: "hero--st-reg-log"
        }

        let classMod = classValues[this.props.address];

        return(
            <div
                className={`hero ${classMod}`}
                id="home"
            >
                <div className="hero__top container">
                    <Header showSubtitle={ this.props.showSubtitle } />
                    <ActionField address={ this.props.address } />
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
