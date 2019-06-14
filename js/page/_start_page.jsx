import React from "react";
import Hero from "./_hero.jsx";

class StartPage extends React.Component {
    render() {

        let columnsStart = [
            {
                height: "100%",
                color: "#173F5F"
            },
            {
                height: "75%",
                color: "#20639B"
            },
            {
                height: "90%",
                color: "#3CAEA3"
            },
            {
                height: "55%",
                color: "#F6D55C"
            },
            {
                height: "80%",
                color: "#ED553B"
            }
        ];

        return(
            <div className="page">
                <Hero
                    address="start"
                    columnsParams={ columnsStart }
                />
            </div>
        );
    }
}

export default StartPage;
