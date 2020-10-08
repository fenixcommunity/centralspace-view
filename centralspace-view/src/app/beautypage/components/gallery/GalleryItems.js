import React from "react";
import poly1 from '../../../../resources/beautypage/images/blog/poly1-560x400.jpg';
import poly2 from '../../../../resources/beautypage/images/blog/poly2-560x400.jpg';
import poly3 from '../../../../resources/beautypage/images/blog/poly3-560x400.jpg';
import poly4 from '../../../../resources/beautypage/images/blog/poly4-560x400.jpg';
import poly5 from '../../../../resources/beautypage/images/blog/poly5-560x400.jpg';
import poly6 from '../../../../resources/beautypage/images/blog/poly6-560x400.jpg';
import ActionButton from "../helper/form/button/ActionButton";
import GalleryItem from "./GalleryItem";

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

const GalleryItems = ({}) => {
    return (
        <>
            <GalleryItem
                filterName="overhead"
                image={{ img: poly1, name: "image", height: "300px" }}
                headerContent={<span>Workspace</span>}
                contentTitle="Grapefruit"
                content={
                    <>
                        <p className="description">
                            Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.
                        </p>
                        <p className="description">
                            Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.
                        </p>
                    </>
                }
                actions={
                    [
                        <ActionButton id="favorite" key="favorite" icon="favorite"
                            buttonFloating={true} buttonLarge={true}
                            color="pink" hasWaves={true} />
                    ]
                }
            />

            <GalleryItem
                filterName="overhead"
                image={{ img: poly2, name: "image", height: "400px" }}
                headerContent={<span>Studio</span>}
                contentTitle="Grapefruit"
                content={
                    <>
                        <p className="description">
                            Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.
                        </p>
                    </>
                }
                actions={
                    [
                        <ActionButton id="favorite" key="favorite" icon="favorite"
                            buttonFloating={true} buttonLarge={true}
                            color="pink" hasWaves={true} />
                    ]
                }
            />


            <GalleryItem
                filterName="sintel"
                image={{ img: poly3, name: "image", height: "300px" }}
                headerContent={<span>Bamboo</span>}
                contentTitle="Grapefruit"
                content={
                    <>
                        <p className="description">
                            Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.
                        </p>
                        <p className="description">
                            Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.
                        </p>
                    </>
                }
                actions={
                    [
                        <ActionButton id="favorite" key="favorite" icon="favorite"
                            buttonFloating={true} buttonLarge={true}
                            color="pink" hasWaves={true} />
                    ]
                }
            />

            <GalleryItem
                filterName="sintel"
                image={{ img: poly4, name: "image", height: "300px" }}
                headerContent={<span>Bedroom</span>}
                contentTitle="Grapefruit"
                content={
                    <>
                        <p className="description">
                            Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.
                        </p>
                    </>
                }
                actions={
                    [
                        <ActionButton id="favorite" key="favorite" icon="favorite"
                            buttonFloating={true} buttonLarge={true}
                            color="pink" hasWaves={true} />
                    ]
                }
            />

            <GalleryItem
                filterName="overhead"
                image={{ img: poly5, name: "image", height: "350px" }}
                headerContent={<span>Workshop</span>}
                contentTitle="Grapefruit"
                content={
                    <>
                        <p className="description">
                            Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.
                        </p>
                        <p className="description">
                            Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.
                        </p>
                    </>
                }
                actions={
                    [
                        <ActionButton id="favorite" key="favorite" icon="favorite"
                            buttonFloating={true} buttonLarge={true}
                            color="pink" hasWaves={true} />
                    ]
                }
            />

            <GalleryItem
                filterName="overhead"
                image={{ img: poly6, name: "image", height: "400px" }}
                headerContent={<span>Kitchen</span>}
                contentTitle="Grapefruit"
                content={
                    <>
                        <p className="description">
                            Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.
                        </p>
                    </>
                }
                actions={
                    [
                        <ActionButton id="favorite" key="favorite" icon="favorite"
                            buttonFloating={true} buttonLarge={true}
                            color="pink" hasWaves={true} />
                    ]
                }
            />

            <GalleryItem
                filterName="sintel"
                image={{ img: poly1, name: "image", height: "300px" }}
                headerContent={<span>Snowscape</span>}
                contentTitle="Grapefruit"
                content={
                    <>
                        <p className="description">
                            Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.
                        </p>
                        <p className="description">
                            Ea salvia adipisicing vegan man bun. Flexitarian cupidatat skateboard flannel. Drinking vinegar marfa you probably haven't heard of them consequat post-ironic, shabby chic williamsburg raclette vaporware readymade selfies brunch. Venmo selvage biodiesel marfa. Tbh literally 3 wolf moon, proident elit raclette chambray consequat edison bulb four loko accusamus. Semiotics godard eiusmod, ex esse air plant quinoa vaporware selfies keytar. Actually yuccie ennui flannel single-origin coffee, williamsburg cardigan banjo forage pug distillery tumblr hexagon vinyl occaecat.
                        </p>
                    </>
                }
                actions={
                    [
                        <ActionButton id="favorite" key="favorite" icon="favorite"
                            buttonFloating={true} buttonLarge={true}
                            color="pink" hasWaves={true} />
                    ]
                }
            />

            <GalleryItem
                filterName="overhead"
                image={{ img: poly2, name: "image", height: "250px" }}
                headerContent={<span>Countertop</span>}
                contentTitle="Grapefruit"
                content={
                    <>
                        <p className="description">
                            Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.
                        </p>
                    </>
                }
                actions={
                    [
                        <ActionButton id="favorite" key="favorite" icon="favorite"
                            buttonFloating={true} buttonLarge={true}
                            color="pink" hasWaves={true} />
                    ]
                }
            />
        </>
    )
}

GalleryItems.propTypes = propTypes;

export default GalleryItems;
