import React from "react";
import avatar1 from '../../../../../resources/beautypage/images/people/avatar1.jpg';
import avatar2 from '../../../../../resources/beautypage/images/people/avatar2.jpg';
import avatar3 from '../../../../../resources/beautypage/images/people/avatar3.jpg';

class Team extends React.Component {
  render() {
    return (
      <>
        <div class="video-container">
          <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
        </div>
        {/* <video class="responsive-video" controls>
          <source src="movie.mp4" type="video/mp4" />
        </video> */}
        
        <div className="section white full-height">
          <div className="row valign">
            <div className="col s12 m10 offset-m1 team">
              <div className="row">
                <div className="col s12 l3 center-on-small-only">
                  <h3 className="section-title">Marketing</h3>
                </div>
                <div className="col s12 l9">
                  <div className="row">
                    <div className="col s12 m4">
                      <div className="avatar-wrapper">
                        <span className="avatar">
                          <img src={avatar1} alt="" />
                        </span>
                      </div>
                      <div className="avatar-name">
                        <span className="name">Jane Doe</span>
                        <span className="title">Founder</span>
                      </div>
                    </div>
                    <div className="col s12 m4">
                      <div className="avatar-wrapper">
                        <span className="avatar">
                          <img src={avatar2} alt="" />
                        </span>
                      </div>
                      <div className="avatar-name">
                        <span className="name">John Chang</span>
                        <span className="title">Head of Sales</span>
                      </div>
                    </div>
                    <div className="col s12 m4">
                      <div className="avatar-wrapper">
                        <span className="avatar">
                          <img src={avatar3} alt="" />
                        </span>
                      </div>
                      <div className="avatar-name">
                        <span className="name">Charlotte Smith</span>
                        <span className="title">Lead Sales</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="divider" />
                </div>
                <div className="col s12 l3 center-on-small-only">
                  <h3 className="section-title">Engineering</h3>
                </div>
                <div className="col s12 l9">
                  <div className="row">
                    <div className="col s12 m4">
                      <div className="avatar-wrapper">
                        <span className="avatar">
                          <img src={avatar1} alt="" />
                        </span>
                      </div>
                      <div className="avatar-name">
                        <span className="name">Jane Doe</span>
                        <span className="title">Frontend Engineer</span>
                      </div>
                    </div>
                    <div className="col s12 m4">
                      <div className="avatar-wrapper">
                        <span className="avatar">
                          <img src={avatar2} alt="" />
                        </span>
                      </div>
                      <div className="avatar-name">
                        <span className="name">John Chang</span>
                        <span className="title">Backend Engineer</span>
                      </div>
                    </div>
                    <div className="col s12 m4">
                      <div className="avatar-wrapper">
                        <span className="avatar">
                          <img src={avatar3} alt="" />
                        </span>
                      </div>
                      <div className="avatar-name">
                        <span className="name">Charlotte Smith</span>
                        <span className="title">Database Engineer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="divider" />
                </div>
                <div className="col s12 l3 center-on-small-only">
                  <h3 className="section-title">Design</h3>
                </div>
                <div className="col s12 l9">
                  <div className="row">
                    <div className="col s12 m4">
                      <div className="avatar-wrapper">
                        <span className="avatar">
                          <img src={avatar1} alt="" />
                        </span>
                      </div>
                      <div className="avatar-name">
                        <span className="name">Jane Doe</span>
                        <span className="title">Motion Designer</span>
                      </div>
                    </div>
                    <div className="col s12 m4">
                      <div className="avatar-wrapper">
                        <span className="avatar">
                          <img src={avatar2} alt="" />
                        </span>
                      </div>
                      <div className="avatar-name">
                        <span className="name">John Chang</span>
                        <span className="title">Interaction Designer</span>
                      </div>
                    </div>
                    <div className="col s12 m4">
                      <div className="avatar-wrapper">
                        <span className="avatar">
                          <img src={avatar3} alt="" />
                        </span>
                      </div>
                      <div className="avatar-name">
                        <span className="name">Charlotte Smith</span>
                        <span className="title">Senior Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Team;
