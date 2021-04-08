import React from "react";
import PropTypes from 'prop-types';
import BlogList from './BlogList';

const propTypes = {
  isExtended: PropTypes.bool,
  hasAnimation: PropTypes.bool
}

const BlogSection = ({ isExtended, hasAnimation }) => {
  const blogContent = isExtended ? (
    <div className="row">
      <div className="col s12 m10 offset-m1 center">
        <BlogList hasAnimation={hasAnimation} />
      </div>
    </div>
  ) :
    (
      <div className="container">
        <div className="row">
          <BlogList hasAnimation={hasAnimation} />
        </div>
      </div>

    );

  return (
    <div className="section light full-height">
      {blogContent}
    </div>
  );
}

BlogSection.propTypes = propTypes;

export default BlogSection;
