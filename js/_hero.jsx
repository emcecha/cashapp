import React from "react";
import Header from "./_header.jsx";
import ActionField from "./_action_field.jsx";
import DecorationColumns from "./_decoration_columns.jsx"

class Hero extends React.Component {

    render() {

        let classMod;
        if (this.props.address === "landing") { classMod = "hero--landing"; };
        if (this.props.address === "start") { classMod = "hero--st-reg-log"; };
        if (this.props.address === "register") { classMod = "hero--st-reg-log"; };
        if (this.props.address === "login") { classMod = "hero--st-reg-log"; };

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
