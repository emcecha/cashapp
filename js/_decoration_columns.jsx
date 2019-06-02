import React from "react";

class DecorationColumns extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            iterations: 1
        }
    }

    getIterationsCount = () => {
        let screenSize = window.innerWidth;
        if (screenSize >= 800) {
            this.setState({
                iterations: 4
            });
        } else {
            this.setState({
                iterations: 1
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

        this.getIterationsCount();
        window.addEventListener("resize", this.getIterationsCount);
    }

    componentWillUnmount() {

        window.removeEventListener("resize", this.getIterationsCount);
    }
}

export default DecorationColumns;
