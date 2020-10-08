import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../helper/form/button/ActionButton';

const propTypes = {
    popupSearcherText: PropTypes.string.isRequired
}

const SearcherPopup = ({ popupSearcherText }) => {
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
                    placeholder={popupSearcherText}
                />

                <ActionButton
                    id="searcher_popup" type="submit"
                    buttonFlat={true} buttonFloating={true} hasWaves={true}
                    icon="search" iconColor="black-text"
                />
            </form>
            <i className="popup-close material-icons">close</i>
        </div>
    )
}

SearcherPopup.propTypes = propTypes;

export default SearcherPopup;
