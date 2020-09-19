import React from 'react';

function FooterPages(props) {
    const pages = props.pages ? (
        props.pages.map(page => {
            return (
                <li>
                    <a href={page.ref}>{page.name}</a>
                </li>
            )
        })) : null

    return (
        <div className="col s6 m3">
            <h5>{props.sectionName}</h5>
            {pages && (
            <ul>
                {pages}
            </ul>
            )}

        </div>
    )
}

export default FooterPages;
