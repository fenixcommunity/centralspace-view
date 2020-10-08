import React from 'react'

function Slider(props) {
    return (
        <li>
            <img src={props.background}  alt="description"/>
            <div className={`caption ${props.align}-align`}>
                <h3>{props.title}</h3>
                <h5 className="light grey-text text-lighten-3">{props.sentence}</h5>
                {props.hasIconArrowDown && (
                    <button className="read-more">
                        <i className="icon-caret-down" />
                    </button>
                )}
            </div>
        </li>
    )
}

export default Slider;
