
import React from "react";
import '../../../../resources/beautypage/css/carousel.css';
import poly1 from '../../../../resources/beautypage/images/blog/poly1.jpg';
import poly2 from '../../../../resources/beautypage/images/blog/poly2.jpg';
import poly3 from '../../../../resources/beautypage/images/blog/poly3.jpg';
import poly4 from '../../../../resources/beautypage/images/blog/poly4.jpg';
import poly5 from '../../../../resources/beautypage/images/blog/poly5.jpg';

function Feature6() {
    return (
            <div className="container">
                <div className="carousel">
                    <a className="carousel-item" href="#one!"><img src={poly1} /></a>
                    <a className="carousel-item" href="#two!"><img src={poly2} /></a>
                    <a className="carousel-item" href="#three!"><img src={poly3} /></a>
                    <a className="carousel-item" href="#four!"><img src={poly4} /></a>
                    <a className="carousel-item" href="#five!"><img src={poly5} /></a>
                </div>
            </div >
    );
}

export default Feature6;