
import React from "react";
import '../../../../../resources/beautypage/css/carousel.css';
import poly1 from '../../../../../resources/beautypage/images/blog/poly1.jpg';
import poly2 from '../../../../../resources/beautypage/images/blog/poly2.jpg';
import poly3 from '../../../../../resources/beautypage/images/blog/poly3.jpg';
import poly4 from '../../../../../resources/beautypage/images/blog/poly4.jpg';
import poly5 from '../../../../../resources/beautypage/images/blog/poly5.jpg';
import CarouselItem from "./CarouselItem";

function Feature4() {
    return (
        <div className="container">
            <div className="carousel">
                <CarouselItem img={poly1} reference="#one!" />
                <CarouselItem img={poly2} reference="#two!" />
                <CarouselItem img={poly3} reference="#three!" />
                <CarouselItem img={poly4} reference="#four!" />
                <CarouselItem img={poly5} reference="#five!" />
            </div>
        </div >
    );
}

export default Feature4;