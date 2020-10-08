import React from 'react'

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

const PagesListForDropdown = ({}) => {
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
                <a className={wavesEffect} href="/beautypage"><i className="material-icons">grain</i>Materialize Css</a>
            </li>
        </>
    )
}

PagesListForDropdown.propTypes = propTypes;

export default PagesListForDropdown;
