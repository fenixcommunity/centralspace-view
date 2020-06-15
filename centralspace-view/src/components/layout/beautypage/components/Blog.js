import React from "react";
import poly1 from '../../../../resources/beautypage/images/poly1.jpg';
import poly2 from '../../../../resources/beautypage/images/poly2.jpg';
import poly3 from '../../../../resources/beautypage/images/poly3.jpg';
import poly4 from '../../../../resources/beautypage/images/poly4.jpg';
import poly5 from '../../../../resources/beautypage/images/poly5.jpg';
import poly6 from '../../../../resources/beautypage/images/poly6.jpg';

class Blog extends React.Component {
  render() {
    return (
      <div className="section light full-height">
        <div className="container">
          <div className="row">
            <div className="col s12 center">
              <h1>blog</h1>
              <div className="row masonry-grid">
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image">
                      <a href="blog.html">
                        <img src={poly1} alt="img"/>
                      </a>
                      <span className="card-title">Something Interesting</span>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image">
                      <a href="blog.html">
                        <img src={poly2} alt="img"/>
                      </a>
                      <span className="card-title">Another Blog Post</span>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image">
                      <a href="blog.html">
                        <img src={poly3} alt="img"/>
                      </a>
                      <span className="card-title">Click Bait Article</span>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image">
                      <a href="blog.html">
                        <img src={poly4} alt="img"/>
                      </a>
                      <span className="card-title">Don't Read This!</span>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image">
                      <a href="blog.html">
                        <img src={poly5} alt="img"/>
                      </a>
                      <span className="card-title">
                        Why Are You Still Reading?
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image">
                      <a href="blog.html">
                        <img src={poly6} alt="img"/>
                      </a>
                      <span className="card-title">Good Bye</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
