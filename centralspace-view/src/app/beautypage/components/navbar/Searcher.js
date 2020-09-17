import React from 'react'
import SearcherPopup from './SearcherPopup'

function Searcher(props) {

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
                    <a className="fullscreen-search" href="#">
                        <i className="material-icons">search</i>
                    </a>
                </li>
            )}

            <SearcherPopup popupSearcherText="Find something" />
        </>
    )
}

export default Searcher;
