import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    reference: PropTypes.string.isRequired,
    img: PropTypes.node.isRequired
}

const CarouselItem = ({reference, img }) => {
    return (
        <a className="carousel-item" href={reference}><img src={img} alt="description"/></a>
    )
}

CarouselItem.propTypes = propTypes;

export default CarouselItem;
