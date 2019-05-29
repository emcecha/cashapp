import React from "react";
import Hero from "./_hero.jsx";

class StartPage extends React.Component {
    render() {

        let columnsStart = [
            {
                height: "50%",
                color: "#173F5F"
            },
            {
                height: "85%",
                color: "#20639B"
            },
            {
                height: "40%",
                color: "#3CAEA3"
            },
            {
                height: "60%",
                color: "#F6D55C"
            },
            {
                height: "95%",
                color: "#ED553B"
            }
        ];

        return(
            <div className="start-pages">
                <Hero
                    address="start page"
                    showSubtitle={ false }
                    columnsParams={ columnsStart }
                />
            </div>
        );
    }
}

export default StartPage;
