import React from "react";
import poly1 from '../../../../../resources/beautypage/images/blog/poly1-560x400.jpg';

function GalleryItemSpecial() {
    return (
        <>
            <div className="gallery-curve-wrapper">
                <a
                    className="gallery-cover gray"
                    style={{
                        height: "300px"
                    }}
                >
                    <img src={poly1} alt="placeholder" />
                </a>
                <div className="gallery-header">
                    <span>Workspace</span>
                </div>
                <div className="gallery-body">
                    <div className="title-wrapper">
                        <h3>Grapefruit</h3>
                    </div>
                    <p className="description">
                        Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.
              </p>
                    <p className="description">
                        Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.
              </p>
                </div>
                <div className="gallery-action">
                    <a className="btn-floating btn-large waves-effect pink waves-light">
                        <i className="material-icons">favorite</i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default GalleryItemSpecial;
