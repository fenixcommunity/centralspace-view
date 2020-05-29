import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.js';
import $ from "jquery";

function Navbar(props) {


helpers



    const [scrollTop, setScrollTop] = useState(document.body.scrollTop);

      // create element ref
  const innerRef = useRef(null);

  useEffect(() => {
    const div = innerRef.current;


    const handleOnScroll = (e) => {
// NOTE: This is for the sake of demonstration purpose only.
// Doing this will greatly affect performance.
setScrollTop(e.target.scrollTop);
}

      div.addEventListener('click', function() {
        const options = {};
        // const elems = document.querySelectorAll('.dropdown-trigger');
        const instance = M.Dropdown.init(div, options);
        // var instance = M.Dropdown.getInstance(div);
        instance.open();
        // const options2 = {};
        // $('.dropdown-trigger').dropdown();
      });
    // subscribe event
    div.addEventListener("scroll", handleOnScroll);
    return () => {
      // unsubscribe event
      div.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  const handleOnScroll = (e) => {
    // NOTE: This is for the sake of demonstration purpose only.
    // Doing this will greatly affect performance.
    setScrollTop(e.target.scrollTop);
  }

  
  return (
    <>
<a className="dropdown-trigger btn" ref={innerRef} data-target='dropdown1'>Drop Me!</a>

<ul id='dropdown1' className='dropdown-content'>
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  {/* <li className="divider" tabindex="-1"></li> */}
  <li className="divider" tabIndex="-1"></li>
  <li><a href="#!">three</a></li>
  <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
  <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
</ul>

    </>
  )




//   const [scrollTop, setScrollTop] = useState(document.body.scrollTop);

//   // create element ref
// const innerRef = useRef(null);

// useEffect(() => {
// const div = innerRef.current;

// // subscribe event
// div.addEventListener("scroll", handleOnScroll);
// return () => {
//   // unsubscribe event
//   div.removeEventListener("scroll", handleOnScroll);
// };
// }, []);

// const handleOnScroll = (e) => {
// // NOTE: This is for the sake of demonstration purpose only.
// // Doing this will greatly affect performance.
// setScrollTop(e.target.scrollTop);
// }


//   return (
//     <>
//       {`ScrollTop: ${scrollTop}`}
//       <div
//         style={{
//           overflow: 'auto',
//           width: 500,
//           height: 500,
//           border: '1px solid black',
//         }}
//         ref={innerRef}
//       >
//         <div style={{ height: 1500, width: 1500 }}>
//           Scroll Me
//         </div>
//       </div>
//     </>
//   )

    // const { auth, profile } = props;
    // const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    // return (
    //     <nav className="nav-wrapper green darken-3">
    //         <Link to='/' className="brand-logo left">Contralspace App</Link>
    //         <div className="container">
    //             {/* NavLink vs Link. For NavLink we have "active" class to show current tab */}
    //             {auth.isLoaded &&
    //                 links
    //             }

    //         </div>
    //     </nav>
    // )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(withRouter(Navbar)); //wraping router (Higher Order Component - HOC). Another example of wrapper inside -> Dashboard.js