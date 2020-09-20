
import React from "react";
import '../../../../../resources/beautypage/css/carousel.css';
import BasicSection from "../BasicSection";
import SliderSection from "../slider/SliderSection";

function SliderHeader() {
    return (
        <BasicSection
            wrappedSection={ <SliderSection /> }
        />
    );
}

export default SliderHeader;