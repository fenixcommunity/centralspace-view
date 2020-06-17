import React from "react";

function Blog() {
  return (
    <div className="section light full-height">
      <div className="row">
        <div className="col s12 m10 offset-m1 center">
          <h1>blog</h1>
          <div className="row masonry-grid">
            <div className="col s12 m6 l4">
              <div className="card fade-in-out up-in-out" data-duration={0}>
                <div className="card-image">
                  <a href="blog.html">
                    <img src="http://placehold.it/600x400" />
                  </a>
                  <span className="card-title">Something Interesting</span>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card fade-in-out up-in-out" data-duration={0}>
                <div className="card-image">
                  <a href="blog.html">
                    <img src="http://placehold.it/600x400" />
                  </a>
                  <span className="card-title">Another Blog Post</span>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card fade-in-out up-in-out" data-duration={0}>
                <div className="card-image">
                  <a href="blog.html">
                    <img src="http://placehold.it/600x400" />
                  </a>
                  <span className="card-title">Click Bait Article</span>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card fade-in-out up-in-out" data-duration={0}>
                <div className="card-image">
                  <a href="blog.html">
                    <img src="http://placehold.it/600x400" />
                  </a>
                  <span className="card-title">Don't Read This!</span>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card fade-in-out up-in-out" data-duration={0}>
                <div className="card-image">
                  <a href="blog.html">
                    <img src="http://placehold.it/600x400" />
                  </a>
                  <span className="card-title">
                    Why Are You Still Reading?
                    </span>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card fade-in-out up-in-out" data-duration={0}>
                <div className="card-image">
                  <a href="blog.html">
                    <img src="http://placehold.it/600x400" />
                  </a>
                  <span className="card-title">Good Bye</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
