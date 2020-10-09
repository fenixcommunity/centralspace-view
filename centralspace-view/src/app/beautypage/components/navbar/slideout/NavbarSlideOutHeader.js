import React from 'react';
import backgroundPlanet2 from '../../../../../resources/beautypage/images/backgroundPlanet2.jpg';
import avatar from '../../../../../resources/beautypage/images/people/avatar4.jpg';

const propTypes = {}

const NavbarSlideOutHeader = () => {
    return (
        <>
            <li className="no-padding">
                <div className="user-view">
                    <div className="background">
                        <img src={backgroundPlanet2} alt="description" />
                    </div>
                    <a href="#user"><img className="circle" src={avatar}  alt="description"/></a>
                    <a href="#name"><span className="white-text name">John Doe</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                </div>
            </li>
            <li>
                <a href="#!"><i className="material-icons primary-color-text">cloud</i>First Link With Icon</a>
            </li>
        </>
    )
}

NavbarSlideOutHeader.propTypes = propTypes;

export default NavbarSlideOutHeader;
