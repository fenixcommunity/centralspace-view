import React from "react";
import backgroundPlanet2 from '../../../../resources/beautypage/images/backgroundPlanet2.jpg';
import avatar from '../../../../resources/beautypage/images/people/avatar3.jpg';
import '../../../../resources/beautypage/css/sidenav-helper.css'; // remove sidenav styles from startup css file

function SlideOut() {
  return (
    <ul id="slide-out" className="side-nav sidenav-helper">
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
        <li className="no-padding">
      <div class="user-view">
        <div class="background">
          <img src={backgroundPlanet2} />
        </div>
        <a href="#user"><img class="circle" src={avatar} /></a>
        <a href="#name"><span class="white-text name">John Doe</span></a>
        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
      </div>
    </li>
    <li>
      <a href="#!"><i class="material-icons primary-color-text">cloud</i>First Link With Icon</a>
      </li>
      <li><div class="divider"></div></li>
          <li className="bold">
            <a className="collapsible-header waves-effect waves-teal active">
              Pages
              </a>
            <div className="collapsible-body">
              <ul>
                <li>
                  <a href="horizontal-half.html">Horizontal Halves</a>
                </li>
                <li>
                  <a href="sierra.html">Zoom Out</a>
                </li>
                <li>
                  <a href="circle-reveal.html">Circle Reveal</a>
                </li>
                <li>
                  <a href="phone-wall.html">Phone Wall</a>
                </li>
                <li>
                  <a href="element-transitions.html">Element Transitions</a>
                </li>
                <li>
                  <a className="active" href="basic-elements.html">
                    Basic Elements
                    </a>
                </li>
                <li>
                  <a href="card-shuffle.html">Shuffle</a>
                </li>
                <li>
                  <a href="postcards.html">Postcards</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
      <li><div class="divider"></div></li>
      <li>
        <a className="waves-effect waves-teal" href="blog.html">
          Blog
          </a>
      </li>
      <li>
        <a className="waves-effect waves-teal" href="team.html">
          Team
          </a>
      </li>
      <li>
        <a className="waves-effect waves-teal" href="docs/about.html">
          Docs
          </a>
      </li>
      <li>
        <a className="waves-effect waves-teal" href="#">
          Buy Now!
          </a>
      </li>
    </ul>
  );
}

export default SlideOut;