import React from 'react'

function CarouselItem(props) {
    return (
        <a className="carousel-item" href={props.reference}><img src={props.img} /></a>
    )
}

export default CarouselItem;
