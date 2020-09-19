import React from "react";

function Header(props) {
    return (
        <div className="section header">
            <img className="background" src={props.headerImg} />
            <div className="header-wrapper row valign-wrapper">
                <div className="col s12">
                    <h1>{props.headerMessage}</h1>
                    <span className="tagline">
                        {props.headerSentence}
                    </span>
                    <button className="read-more">
                        <i className="icon-caret-down" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
