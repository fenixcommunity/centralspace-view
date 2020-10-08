
import React from "react";
import '../../../../resources/beautypage/css/carousel.css';
import BasicSection from "../helper/section/BasicSection";
import SliderSection from "../slider/SliderSection";

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

const SliderHeader = ({ }) => {
    return (
        <BasicSection
            wrappedSection={ <SliderSection /> }
        />
    );
}

SliderHeader.propTypes = propTypes;

export default SliderHeader;