
import React from "react";
import '../../../../resources/beautypage/css/carousel.css';
import BasicSection from "../helper/section/BasicSection";
import SliderSection from "../slider/SliderSection";

const propTypes = {}

const SliderHeader = () => {
    return (
        <BasicSection
            wrappedSection={ <SliderSection /> }
        />
    );
}

SliderHeader.propTypes = propTypes;

export default SliderHeader;