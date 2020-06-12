import React from "react";

class SlideOut extends React.Component {
  render() {
    return (
      <ul id="slide-out" className="side-nav">
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
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
}

export default SlideOut;
