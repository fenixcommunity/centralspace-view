import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
import cityImg from '../../../../resources/materializecss/project/img/city.jpg';
import natureImg from '../../../../resources/materializecss/project/img/nature.jpg';

function Photo() {
  const scrollspyRef = useRef(null);

  useEffect(() => {
    M.AutoInit();
    let scrollspy = M.Sidenav.init(scrollspyRef.current, {});
  }, []);

  return (
    <section className="container section scrollspy" id="photos" ref={scrollspyRef}>
      <div className="row">
        <div className="col s12 l4">
          <img
            src={cityImg}
            alt=""
            className="responsive-img materialboxed"
          />
        </div>
        <div className="col s12 l6 offset-l1">
          <h2 className="indigo-text text-darken-4">Portraits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
            </p>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l4 offset-l1 push-l7">
          <img
            src={cityImg}
            alt=""
            className="responsive-img materialboxed"
          />
        </div>
        <div className="col s12 l6 offset-l1 pull-l5 right-align">
          <h2 className="indigo-text text-darken-4">Cityscapes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
            </p>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l4">
          <img
            src={natureImg}
            alt=""
            className="responsive-img materialboxed"
          />
        </div>
        <div className="col s12 l6 offset-l1">
          <h2 className="indigo-text text-darken-4">Nature</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
            </p>
        </div>
      </div>
    </section>
  );
}

export default Photo;
