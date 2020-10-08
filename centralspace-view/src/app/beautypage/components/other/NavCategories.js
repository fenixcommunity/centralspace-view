import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            items: PropTypes.object.isRequired,
        })
    ).isRequired
}

const NavCategories = ({ categories }) => {
    return (
        <nav className="nav-extended">
            <div className="categories-wrapper">
                <div className="categories-container pin-top">
                    {categories && categories.map(category => (
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

NavCategories.propTypes = propTypes;

export default NavCategories
