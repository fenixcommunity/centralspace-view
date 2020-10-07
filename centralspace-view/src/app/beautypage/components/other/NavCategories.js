import React from 'react'

function NavCategories(props) {
    return (
        <nav className="nav-extended">
            <div className="categories-wrapper">
                <div className="categories-container pin-top">
                    {props.categories && props.categories.map(category => (
                        <ul key={category.name} className="categories container" data-filter={category.name}>
                            {category.items && category.items.map(item => (
                                <li key={item.reference} className={`${item.active ? "active" : ""}`}>
                                    <a href={item.reference}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default NavCategories
