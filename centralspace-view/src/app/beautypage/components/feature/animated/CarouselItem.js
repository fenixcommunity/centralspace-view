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

const CarouselItem = ({ }) => {
    return (
        <a className="carousel-item" href={props.reference}><img src={props.img} alt="description"/></a>
    )
}

CarouselItem.propTypes = propTypes;

export default CarouselItem;
