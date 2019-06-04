import React from "react";

class Cashapp extends React.Component {
    render() {
        console.log(localStorage);
        return(
            <div className="cashapp">

                <header className="cashapp__header window">
                    <h1>cashapp</h1>
                </header>

                <div className="cashapp__content">

                    <nav className="cashapp__aside cashapp__aside--left">
                        <div className="test window">
                            <div>

                            </div>
                            <div>
                                <h2>Accounts</h2>
                                <ul>

                                </ul>
                            </div>
                        </div>
                        <div className="test window">
                            <div>

                            </div>
                            <div>
                                <h2>Categories</h2>
                                <ul>

                                </ul>
                            </div>
                        </div>
                    </nav>

                    <main className="cashapp__main window">

                    </main>

                    <aside className="cashapp__aside cashapp__aside--right">
                        <div className="test window">

                        </div>
                        <div className="test window">

                        </div>
                    </aside>

                </div>

            </div>
        );
    }
}

export default Cashapp;
