
import React from "react";
import '../../../../resources/beautypage/css/carousel.css';
import backgroundStars from '../../../../resources/beautypage/images/backgroundStars.jpg';

function TransitionsHeader() {
    return (
        <div className="section valign-wrapper">
            <div className="container">
                <div className="slider fullscreen">
                    <ul className="slides">
                        <li>
                            <img src={backgroundStars}/>
                            <div className="caption center-align">
                                <h3>This is our big Tagline!</h3>
                                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                <button className="read-more">
                                    <i className="icon-caret-down" />
                                </button>
                            </div>
                        </li>
                        <li>
                            <img src="https://ununsplash.imgix.net/photo-1414849424631-8b18529a81ca?q=75&fm=jpg&s=0e993004a2f3704e8f2ad5469315ccb7" />
                            <div className="caption left-align">
                                <h3>Left Aligned Caption</h3>
                                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://ununsplash.imgix.net/uploads/1413259835094dcdeb9d3/6e609595?q=75&fm=jpg&s=6a4fc66161293fc4a43a6ca6f073d1c5" />
                            <div className="caption right-align">
                                <h3>Right Aligned Caption</h3>
                                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>

                        </li>
                    </ul>
                </div>

            </div>
        </div >
    );
}

export default TransitionsHeader;