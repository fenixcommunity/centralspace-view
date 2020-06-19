import React, { useEffect, useRef } from "react";

function ScrollspySection() {

return(

<section className="container scrollspy" id="services">
<div className="row">
  <div className="col s12 l4">
    <h2 className="section-title">What I do..</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
      </p>
    <p>
      Mauris dolor augue, vulputate in pharetra ac, facilisis nec
      libero. Fusce condimentum gravida urna, vitae scelerisque erat
      ornare nec.
      </p>
  </div>
  <div className="col s12 l6 offset-l2">
    {}
    <ul className="tabs">
      <li className="tab col s6">
        <a
          href="#photography"
          className="active indigo-text text-darken-4"
        >
          Photography
          </a>
      </li>
      <li className="tab col s6">
        <a href="#editing" className="indigo-text text-darken-4">
          Editing
          </a>
      </li>
    </ul>
    <div id="photography" className="col s12">
      <p className="flow-text section-title">Photography</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
        </p>
    </div>
    <div id="editing" className="col s12">
    <p className="flow-text section-title">Editing</p>
      <p>
        Mauris dolor augue, vulputate in pharetra ac, facilisis nec
        libero. Fusce condimentum gravida urna, vitae scelerisque erat
        ornare nec.
        </p>
    </div>
  </div>
</div>
</section>

);
}

export default ScrollspySection;