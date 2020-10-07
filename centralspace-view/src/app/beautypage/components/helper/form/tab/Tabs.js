import React from 'react'

function Tabs(props) {
    const tabs = props.tabs;
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

export default Tabs;
