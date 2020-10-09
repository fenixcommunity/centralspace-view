import React from 'react';
import backgroundStars from '../../../../resources/beautypage/images/backgroundStars.jpg';
import Slider from './Slider';

const propTypes = {}

const SliderSection = () => {
    return (
        <div className="slider fullscreen">
            <ul className="slides">
                <Slider
                    background={backgroundStars}
                    align="center"
                    title="This is our big Tagline!"
                    sentence="Here's our small slogan."
                    hasIconArrowDown={true} />
                <Slider
                    background="https://ununsplash.imgix.net/photo-1414849424631-8b18529a81ca?q=75&fm=jpg&s=0e993004a2f3704e8f2ad5469315ccb7"
                    align="left"
                    title="Left Aligned Caption"
                    sentence="Here's our small slogan."
                    hasIconArrowDown={false} />
                <Slider
                    background="https://ununsplash.imgix.net/uploads/1413259835094dcdeb9d3/6e609595?q=75&fm=jpg&s=6a4fc66161293fc4a43a6ca6f073d1c5"
                    align="right"
                    title="Right Aligned Caption"
                    sentence="Here's our small slogan."
                    hasIconArrowDown={false} />
            </ul>
        </div>
    )
}

SliderSection.propTypes = propTypes;

export default SliderSection;
