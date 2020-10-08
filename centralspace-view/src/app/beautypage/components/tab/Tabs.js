import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            active: PropTypes.bool,
        })
    ).isRequired
}

const Tabs = ({ tabs }) => {
    const tabsDivision = (12 / tabs.length);
    return (
        <>
            <ul className="tabs">
                {tabs && tabs.map(tab => {
                    return (
                        <li key={tab.id} className={`tab col s${tabsDivision}`}>
                            <a href={`#${tab.id}`}
                                className={`#${tab.active ? "active" : ""} indigo-text text-darken-4`}>
                                {tab.label}
                            </a>
                        </li>
                    )
                })}
            </ul>

            {tabs && tabs.map(tab => {
                return (
                    <div key={tab.id} id={tab.id} className="col s12">
                        <p className="flow-text section-title">{tab.label}</p>
                        {tab.content}
                    </div>
                )
            })}
        </>
    )
}

Tabs.propTypes = propTypes;

export default Tabs;
