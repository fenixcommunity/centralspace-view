import React from "react";
import BlogBody from './BlogBody';

function Blog(props) {
  const isExtended = props.isExtended;

  const blogContent = isExtended ? (
    <div className="row">
      <div className="col s12 m10 offset-m1 center">
        <BlogBody hasAnimation={props.hasAnimation} />
      </div>
    </div>
  ) :
    (
      <div className="container">
        <div className="row">
          <BlogBody hasAnimation={props.hasAnimation} />
        </div>
      </div>

    );

  return (
    <div className="section light full-height">
      {blogContent}
    </div>
  );
}

export default Blog;
