import React from "react";
import Hero from "./_hero.jsx";
import Section from "./_section.jsx";
import Contact from "./_contact.jsx";

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

        let aboutAppContent = {
            title: "What's it all ABOUT?",
            items: [
                {
                    imgUrl: "../img/list_icon.svg",
                    lead: "Keep a list of expenses and revenues",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    imgUrl: "../img/visual_icon.svg",
                    lead: "Visualize expenses and revenues",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    imgUrl: "../img/currency_icon.svg",
                    lead: "Accounts in foreign currencies",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
            ]
        }

        let benefitsContent = {
            title: "Why? BENEFITS.",
            items: [
                {
                    imgUrl: "../img/one_place_icon.svg",
                    lead: "Have all your finances in one place",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    imgUrl: "../img/analyze_icon.svg",
                    lead: "Analyze. Knowledge is power",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        }

        let aboutCreatorContent = {
            title: "About CREATOR",
            items: [
                {
                    imgUrl: "../img/me_icon.svg",
                    lead: "Continuous improvement and running enthusiast",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        }

        return(
            <div>
                <Hero
                    address="landing page"
                    showSubtitle={ true }
                    columnsParams={ columnsLandingPage }
                />
                <Section content={ aboutAppContent } />
                <Section content={ benefitsContent } />
                <Section content={ aboutCreatorContent } />
                <Contact />
            </div>
        );

    }

}

export default LandingPage;
