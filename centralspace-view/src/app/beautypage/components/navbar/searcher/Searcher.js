import React from 'react'
import SearcherPopup from './SearcherPopup'

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

const Searcher = ({}) => {

    return (
        <>
            {props.basicSearchIsActive && (
                <li>
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required />
                            <label className="label-icon" htmlFor="search">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </li>
            )}
            {props.fullScreenSearchIsActive && (
                <li>
                    <a className="fullscreen-search" href="#!">
                        <i className="material-icons">search</i>
                    </a>
                </li>
            )}

            <SearcherPopup popupSearcherText="Find something" />
        </>
    )
}

Searcher.propTypes = propTypes;

export default Searcher;
