import React from "react";
import BlogList from './BlogList';

function BlogSection(props) {
  const isExtended = props.isExtended;

  const blogContent = isExtended ? (
    <div className="row">
      <div className="col s12 m10 offset-m1 center">
        <BlogList hasAnimation={props.hasAnimation} />
      </div>
    </div>
  ) :
    (
      <div className="container">
        <div className="row">
          <BlogList hasAnimation={props.hasAnimation} />
        </div>
      </div>

    );

  return (
    <div className="section light full-height">
      {blogContent}
    </div>
  );
}

export default BlogSection;
