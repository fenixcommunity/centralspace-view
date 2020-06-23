import React, { useEffect, useRef } from "react";
import '../../../../../resources/beautypage/css/modal.css';
import '../../../../../resources/beautypage/css/pulse.css';
import '../../../../../resources/beautypage/css/flowtext.css';
import M from 'materialize-css/dist/js/materialize.js';
import poly1 from '../../../../../resources/beautypage/images/blog/poly1.jpg';
import poly2 from '../../../../../resources/beautypage/images/blog/poly2.jpg';
import avatar1 from '../../../../../resources/beautypage/images/people/avatar1.jpg';
import avatar2 from '../../../../../resources/beautypage/images/people/avatar2.jpg';
import avatar3 from '../../../../../resources/beautypage/images/people/avatar3.jpg';

function Blog() {
  const modalRef = useRef(null);

  useEffect(() => {
    let modal = M.Modal.init(modalRef.current, {});
  }, []);

  return (
    <div className="section white full-height">
      <div className="row valign">

        <div id="flow-text-section" className="col s8 offset-s2 m6 offset-m3 blog-body">
          <a id="flow-toggle" className="teal-text text-lighten-2"><i className="material-icons medium right">zoom_in</i></a>
          <h4>
            Here is your first sentence that should be bold and exciting. Try
            and give a good summary of your blog article.
            </h4>
          <p>
            Cliche godard scenester, affogato cornhole pop-up humblebrag
            ullamco post-ironic DIY anim before they sold out. Heirloom kitsch
            flexitarian, williamsburg sriracha nostrud semiotics pickled
            flannel green juice ut fugiat sartorial. VHS do knausgaard dolore.
            Jean shorts vero cillum assumenda readymade, franzen paleo. Umami
            accusamus yr cupidatat. Aliqua letterpress chia, cardigan green
            juice synth jean shorts PBR&B gluten-free. Bespoke fixie excepteur
            street art shabby chic, microdosing brooklyn selfies mixtape duis
            food truck pinterest nisi austin.
            </p>
          <p>
            Locavore drinking vinegar quinoa seitan church-key, tilde aliqua.
            Hoodie mustache aliquip, selfies bitters poutine adipisicing
            scenester man braid jean shorts. Aliqua mlkshk 90's distillery,
            truffaut sapiente trust fund fashion axe officia selvage occaecat
            locavore accusamus. Labore proident culpa excepteur gluten-free.
            Venmo typewriter pitchfork migas, occaecat est commodo pork belly
            laboris austin officia. Dolor stumptown typewriter, aliqua twee in
            readymade cronut. Nesciunt slow-carb ut whatever +1, craft beer
            irony vero tilde.
            </p>
          <div className="divider" />
          <h4>Second Header</h4>
          <p>
            Flexitarian nihil drinking vinegar gochujang, est odio cillum
            cardigan wolf. Direct trade ennui trust fund cillum try-hard
            aliqua, yuccie wayfarers chicharrones. Biodiesel cillum tattooed,
            pop-up tilde yr stumptown kogi. Ennui photo booth incididunt enim
            polaroid, nisi duis microdosing marfa fingerstache hammock
            biodiesel. Laboris vice try-hard, four loko street art
            chicharrones green juice neutra seitan. XOXO tofu sustainable
            velit before they sold out, biodiesel food truck nisi forage fap
            est asymmetrical anim veniam post-ironic. Sunt mustache gastropub
            ea, direct trade excepteur consequat paleo do man bun.
            </p>
          <img
            className="materialboxed"
            src={poly1}
            data-caption="A picture of a way with a group of trees in a park"
            alt=""
          />
          <p>
            Irony lomo viral, listicle swag lo-fi blue bottle everyday carry
            bushwick echo park freegan austin. Flannel shabby chic vice,
            kinfolk small batch man bun intelligentsia try-hard hoodie
            skateboard 90's beard. Hoodie etsy poutine whatever, roof party
            tote bag kombucha four dollar toast mixtape banjo normcore
            thundercats ramps art party.
            </p>
          <div className="divider" />
          <h4>Third Header</h4>
          <p>
            Pinterest seitan truffaut, craft beer tumblr DIY blue bottle ugh
            pitchfork post-ironic put a bird on it literally. Wolf craft beer
            pickled, beard humblebrag XOXO blue bottle. Pop-up chillwave
            meggings green juice. Cliche four loko health goth vegan. Master
            cleanse PBR&B hella bitters. Distillery kitsch man bun, direct
            trade tofu street art offal PBR&B selfies iPhone fanny pack austin
            raw denim stumptown vice. Craft beer four dollar toast scenester,
            heirloom twee fashion axe celiac affogato.
            </p>
          <img
            className="materialboxed"
            src={poly2}
            data-caption="A picture of a way with a group of trees in a park"
            alt=""
          />
          <p>
            Flexitarian pickled cardigan humblebrag. Crucifix fingerstache
            four dollar toast actually, austin meggings church-key. Normcore
            jean shorts DIY, ennui post-ironic franzen brooklyn sriracha green
            juice health goth bicycle rights hammock chartreuse farm-to-table
            authentic. Bitters actually tousled, etsy ennui DIY keffiyeh
            skateboard sartorial williamsburg church-key cray cliche. Etsy
            YOLO waistcoat, four dollar toast lomo salvia poutine pork belly
            seitan thundercats gastropub tattooed bespoke franzen plaid. Tote
            bag readymade waistcoat meh. Actually keffiyeh street art jean
            shorts, pabst crucifix 90's blog microdosing selvage gluten-free.
            </p>
        </div>
        <div className="col s8 offset-s2 m6 offset-m3 blog-author">
          <div className="divider" />
          <div className="avatar-wrapper">
            <div className="avatar">
              <img src={avatar1} alt="" />
            </div>
          </div>
          <div className="author">
            <span>Author</span>
              Jane Doe
            </div>
          <div className="date">
            <span>2016</span>
              January 31st
            </div>
          <div className="divider" />
        </div>
        <div className="col s8 offset-s2 m6 offset-m3 blog-related">
          <h4>Related Articles</h4>
          <ul>
            <li>
              <a href="#!">
                <span className="avatar-wrapper">
                  <span className="avatar">
                    <img src={avatar2} alt="" />
                  </span>
                </span>
                <span className="title">The Greatest Blog Article</span>
                <span className="date">12 / 23 / 2015</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="avatar-wrapper">
                  <span className="avatar">
                    <img src={avatar3} alt="" />
                  </span>
                </span>
                <span className="title">Interesting New Technology</span>
                <span className="date">10 / 4 / 2015</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="avatar-wrapper">
                  <span className="avatar">
                    <img src={avatar1} alt="" />
                  </span>
                </span>
                <span className="title">Just a Quick Update</span>
                <span className="date">8 / 14 / 2015</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="avatar-wrapper">
                  <span className="avatar">
                    <img src={avatar2} alt="" />
                  </span>
                </span>
                <span className="title">First Blog Post!</span>
                <span className="date">6 / 9 / 2015</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <h4>Articles</h4>
        <div className="row">
          <div className="col s12 l6 hoverable">
            <div className="card">
              <div className="card-image">
                <img src={poly1} alt="" />
                <a href="" className="halfway-fab btn-floating pink pulse">
                  <i className="material-icons">favorite</i>
                </a>
              </div>
              <div className="card-content">
                <span className="card-title">Mango & Chickpea Curry</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci
                  varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <blockquote>
                  This is an example quotation that uses the blockquote tag.
                </blockquote>
              </div>
              <div className="card-action">
                <a className="teal-text text-lighten-2" href="">More details</a>
                <a className="teal-text text-lighten-2" href="">View Similar</a>
              </div>
            </div>
          </div>
          <div className="col s12 l6">
            <div className="card">
              <div className="card-image">
                <img src={poly2} alt="" />
                <a href="" className="halfway-fab btn-floating pink pulse">
                  <i className="material-icons">favorite</i>
                </a>
              </div>
              <div className="card-content">
                <span className="card-title">Rainbow Pasta Salad</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci
                  varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <blockquote>
                  This is an example quotation that uses the blockquote tag.
                </blockquote>
              </div>
              <div className="card-action">
                <a className="teal-text text-lighten-2" href="">More details</a>
                <a className="teal-text text-lighten-2" href="">View Similar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="collection with-header">
          <li className="collection-header"><h4>Our Authors</h4></li>

          <li className="collection-item avatar">
            <div className="avatar-wrapper circle">
              <div className="avatar">
                <img src={avatar1} alt="" />
              </div>
            </div>
            <span className="title">Ryu</span>
            <p className="grey-text">black-belt</p>
            <a href="" className="secondary-content">
              <i className="material-icons primary-color-text">email</i>
            </a>
          </li>

          <li className="collection-item avatar">
            <div className="avatar-wrapper circle">
              <div className="avatar">
                <img src={avatar3} alt="" />
              </div>
            </div>
            <span className="title">Yoshi</span>
            <p className="grey-text truncate ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci
                            varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <a href="" className="secondary-content">
              <i className="material-icons primary-color-text">email</i>
            </a>
          </li>

          <li className="collection-item avatar">
            <div className="avatar-wrapper circle">
              <div className="avatar">
                <img src={avatar2} alt="" />
              </div>
            </div>
            <span className="title">Crystal</span>
            <p className="grey-text">brown-belt</p>
            <a href="" className="secondary-content">
              <i className="material-icons primary-color-text">email</i>
            </a>
          </li>

          <li className="collection-item">Mario</li>
        </ul>
      </div>

      <div className="container">
        <a className="waves-effect waves-light btn teal lighten-2 modal-trigger" href="#terms">Terms & Conditions</a>

        {/* modal-fixed-footer */}
        <div id="terms" className="modal" ref={modalRef} >
          <div className="modal-content">
            <h4>Terms & Conditions</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae finibus mi, egestas dignissim metus. Fusce tempus elementum metus. Donec eu nibh fringilla, dignissim arcu eu, ultrices ante. Cras consectetur risus id mi condimentum aliquam.</p>
          </div>
          <div className="modal-footer hoverable">
            <a href="#!" className="modal-close btn teal lighten-2">Agree</a>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Blog;
