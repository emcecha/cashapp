import React from "react";
import Hero from "./_hero.jsx";

class RegisterPage extends React.Component {
    render() {

        let columnsRegister = [
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
                    address="register page"
                    showSubtitle={ false }
                    columnsParams={ columnsRegister }
                />
            </div>
        );
    }
}

export default RegisterPage;
