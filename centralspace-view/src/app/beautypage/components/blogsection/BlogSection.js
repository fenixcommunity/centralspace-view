import React from "react";
import BlogList from './BlogList';

const propTypes = {
  XXX: PropTypes.string.isRequired,
  XXX: PropTypes.bool.isRequired,
  XXX: PropTypes.node.isRequired,
  XXX: PropTypes.func.isRequired,
  cardAction: PropTypes.arrayOf(
      PropTypes.shape({
          XXX: PropTypes.string.isRequired,
      })
  ).isRequired,
}

const BlogSection = ({}) => {
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

BlogSection.propTypes = propTypes;

export default BlogSection;
