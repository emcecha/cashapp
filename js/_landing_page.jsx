import React from "react";
import Navigation from "./_navigation.jsx";
import Hero from "./_hero.jsx";
import Spacer from "./_spacer.jsx";
import Section from "./_section.jsx";
import Contact from "./_contact.jsx";
import Footer from "./_footer.jsx"

class LandingPage extends React.Component {

    render() {

        let columnsHero = [
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

        let columnsFooter = [
            {
                height: "70px",
                color: "#173F5F"
            },
            {
                height: "110px",
                color: "#20639B"
            },
            {
                height: "50px",
                color: "#3CAEA3"
            },
            {
                height: "80px",
                color: "#F6D55C"
            },
            {
                height: "130px",
                color: "#ED553B"
            }
        ];

        let columnsSpacer = [
            {
                height: "70px",
                color: "#173F5F"
            },
            {
                height: "110px",
                color: "#20639B"
            },
            {
                height: "50px",
                color: "#3CAEA3"
            },
            {
                height: "80px",
                color: "#F6D55C"
            },
            {
                height: "130px",
                color: "#ED553B"
            }
        ];

        let aboutAppContent = {
            title: "What's it all ABOUT?",
            id: "aboutApp",
            sectionMod: "section__items--about-app",
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
            id: "benefits",
            sectionMod: "section__items--benefits",
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
            id: "aboutCreator",
            sectionMod: "section__items--creator",
            items: [
                {
                    imgUrl: "../img/me_icon.svg",
                    lead: "Continuous improvement and running enthusiast",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        }

        let navItems = [
            {
                name: "Home",
                id: "home"
            },
            {
                name: "About App",
                id: "aboutApp"
            },
            {
                name: "Benefits",
                id: "benefits"
            },
            {
                name: "Creator",
                id: "aboutCreator"
            },
            {
                name: "Contact",
                id: "contact"
            }
        ]

        return(
            <div className="page">
                <Navigation navItems={ navItems } />
                <Hero
                    address="landing"
                    columnsParams={ columnsHero }
                    navItems={ navItems }
                />
                <Spacer columnsParams={ columnsSpacer }/>
                <Section
                    content={ aboutAppContent }
                    id="aboutApp"
                />
                <Section
                    content={ benefitsContent }
                    id="benefits"
                />
                <Section
                    content={ aboutCreatorContent }
                    id="aboutCreator"
                />
                <Contact id="contact" />
                <Footer columnsParams={ columnsFooter } />
            </div>
        );

    }

}

export default LandingPage;
