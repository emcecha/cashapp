import React from "react";

class Section extends React.Component {

    render() {

        return(
            <section
                className="section"
                id={ this.props.id }
            >
                <h2 className="section__title">
                    { this.props.content.title }
                </h2>

                { this.props.content.items.map((el,index) => {

                    return(
                        <div
                            className="section__item"
                            key={ index }
                        >
                            <div
                                className="section__img"
                                style={ {backgroundImage: `url(${el.imgUrl})`} }
                            >
                            </div>
                            <div className="section__text-box">
                                <h3 className="section__lead">
                                    { el.lead }
                                </h3>
                                <p className="section__text">
                                    { el.text }
                                </p>
                            </div>
                        </div>
                    );
                }) }
            </section>
        );
    }
}

export default Section;
