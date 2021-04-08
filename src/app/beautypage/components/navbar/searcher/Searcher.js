import React from 'react';
import PropTypes from 'prop-types';
import SearcherPopup from './SearcherPopup'

const propTypes = {
    basicSearchIsActive: PropTypes.bool,
    fullScreenSearchIsActive: PropTypes.bool
}

const Searcher = ({ basicSearchIsActive, fullScreenSearchIsActive }) => {
    return (
        <>
            {basicSearchIsActive && (
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
            {fullScreenSearchIsActive && (
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
