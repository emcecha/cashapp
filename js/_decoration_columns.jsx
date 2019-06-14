import React from "react";

class DecorationColumns extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            iterations: 1,
            mqlMatch: false
        }
    }

    getIterationsCount = () => {

        let mql = window.matchMedia("(min-width: 800px)");

        if (this.state.mqlMatch === mql.matches) {
            return;
        }

        if (mql.matches) {
            this.setState({
                iterations: 4,
                mqlMatch: mql.matches
            });
        } else {
            this.setState({
                iterations: 1,
                mqlMatch: mql.matches
            });
        }
    }

    render() {

        let newColumnsParams = [];

        for (let i = 0; i < this.state.iterations; i++) {
            let columnsParams = [...this.props.columnsParams];
            newColumnsParams = [...newColumnsParams,...columnsParams];
        }

        let columnsElements = newColumnsParams.map((el,index) => {

            let columnStyle = {
                height: el.height,
                backgroundColor: el.color
            }

            return(
                <div
                    key={ index }
                    style={ columnStyle }
                    className="columns__element">
                </div>
            );

        });

        let alignStyle;
        if (this.props.upsidedown) {
            alignStyle = "flex-start";
        } else {
            alignStyle = "flex-end"
        }

        return(
            <div
                style={ {alignItems: alignStyle} }
                className="columns"
            >
                { columnsElements }
            </div>
        );

    }

    componentDidMount() {

        this.mediaQuery = window.matchMedia("(min-width: 800px)");
        this.getIterationsCount();
        this.mediaQuery.addListener(this.getIterationsCount);
    }

    componentWillUnmount() {

        this.mediaQuery.removeListener(this.getIterationsCount);
    }
}

export default DecorationColumns;
