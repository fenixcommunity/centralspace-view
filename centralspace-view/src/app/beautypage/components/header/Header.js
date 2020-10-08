import React from "react";

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const Header = ({}) => {
    const blackTheme = props.hasBlackTheme;
    const headerWithOffset = props.headerWithOffset ? "col s12 m6 offset-m3 valign" : "col s12"

    return (
        <div className={`section header ${blackTheme ? "white" : ""}`}>
            <img className="background" src={props.headerImg} alt="description"/>
            <div className="header-wrapper row valign-wrapper">
                <div className={headerWithOffset}>
                    <h1>{props.headerMessage}</h1>
                    <span className="tagline">
                        {props.headerSentence}
                    </span>
                    <button className="read-more">
                        <i className={`${blackTheme ? "black-text" : ""} icon-caret-down`}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = propTypes;

export default Header;
