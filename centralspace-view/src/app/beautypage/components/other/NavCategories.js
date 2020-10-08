import React from 'react'

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const NavCategories = ({ }) => {
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

NavCategories.propTypes = propTypes;

export default NavCategories
