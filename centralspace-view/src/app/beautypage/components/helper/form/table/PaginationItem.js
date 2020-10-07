import React from 'react'

function PaginationItem(props) {
    const page = props.page;
    const activeClass = page.active ? "active" : "";
    const wavesClass = page.waves ? "waves-effect" : "";
    return (
        <li className={`${activeClass} ${wavesClass}`}>
            <a href={page.ref}>{page.number}</a>
        </li>
    )
}

export default PaginationItem
