import React from "react";

class Section extends React.Component {

    render() {

        return(
            <section
                className="section container"
                id={ this.props.id }
            >
                <h2 className="section__title">
                    { this.props.content.title }
                </h2>
                <div className= { `section__items ${this.props.content.sectionMod} container` } >
                    { this.props.content.items.map((el,index) => {
                        let itemMod = index % 2 > 0 ? "section__item--odd" : "section__item--even";
                        return(
                            <div
                                className={ `section__item ${itemMod}` }
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
                </div>
            </section>
        );
    }
}

export default Section;
