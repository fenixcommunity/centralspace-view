import React from 'react'

function PagesListForDropdown(props) {
    const wavesEffect = props.waves ? "waves-effect waves-teal" : ""
    return (
        <>
            <li>
                <a className={wavesEffect} href="/"><i className="material-icons">home</i>Main App</a>
            </li>
            <li>
                <a className={`active ${wavesEffect}`} href="/beautypage"><i className="material-icons">all_inclusive</i>Beautypage</a>
            </li>
            <li>
                <a className={wavesEffect} href="/materializecss"><i className="material-icons">grain</i>Materialize Css</a>
            </li>
        </>
    )
}

export default PagesListForDropdown;
