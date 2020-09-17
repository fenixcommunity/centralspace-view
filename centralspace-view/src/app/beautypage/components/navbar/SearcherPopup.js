import React from 'react'

function SearcherPopup(props) {
    return (
        <div className="popup-search-wrapper">
            <form action="/beautypage/search" method="get" role="search">
                <label htmlFor="search" className="label-hidden active">
                    Search our store
        </label>
                <input
                    type="search"
                    name="q"
                    id="search"
                    placeholder={props.popupSearcherText}
                />
                <button type="submit" className="btn-flat btn-floating waves-effect">
                    <i className="material-icons black-text">search</i>
                </button>
            </form>
            <i className="popup-close material-icons">close</i>
        </div>
    )
}

export default SearcherPopup;
