import React from "react";
import Hero from "./_hero.jsx";

class LandingPage extends React.Component {

    render() {

        let columnsLandingPage = [
            {
                height: "130%",
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
            },
        ];

        return(
            <div>
                <Hero address="landing page" showSubtitle={ true } columnsParams={ columnsLandingPage } />
            </div>
        );

    }

}

export default LandingPage;
