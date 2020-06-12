import React, { useEffect, useRef } from "react";
// import M from 'materialize-css/dist/js/materialize.js';
import $ from 'jquery';
import loadjs from 'loadjs';

class Navbar extends React.Component {

  // componentDidMount() {
  //   loadjs(['/beautypage/js/startup.js']);
 
  //   loadjs.ready('foobar', function() {
  //   console.log("loadjs")
  //   });

  //   // M.AutoInit();

  //   //     $('.read-more').off('click.read-more').on('click.read-more', function () {
  //   //   var sectionHeight = $(this).closest('.section').outerHeight();
  //   //   var offset = sectionHeight || window.innerHeight;
  //   //   $('html, body').animate({scrollTop: offset }, 1000);
  //   // });
  // }


//   useEffect(() => {
//     loadjs(['%PUBLIC_URL%/beautypage/js/startup.js']);
 
// loadjs.ready('foobar', function() {
// console.log("loadjs")
// });

// //     loadjs('/beautypage/js/startup.js', function() {

// //     })
//    }, []);

  render() {
    return (
      <nav className="navbar navbar-solid-transition">
        <div className="nav-wrapper">
          <a href="horizontal-half.html" className="brand-logo">
            <i className="icon-diamond" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="active">
              <a
                className="dropdown-trigger"
                href='#'
                data-activates="pages"
                data-constrainwidth="false"
                 data-beloworigin="true"
                data-target="pages"
              >
                
                Pages<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="team.html">Team</a>
            </li>
            <li>
              <a href="docs/about.html">Docs</a>
            </li>
            <li>
              <a href="#">Buy Now!</a>
            </li>
          </ul>
          <ul id="pages" className="dropdown-content">
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
          <a
            href="#"
            data-activates="slide-out"
            data-target="slide-out"
            className="button-collapse right"
          >
            <i className="material-icons white-text">menu</i>
          </a>
        </div>
      </nav>

      
    );
  }
}

export default Navbar;
