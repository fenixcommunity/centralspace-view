import React from "react";
import poly1 from '../../../../resources/beautypage/images/blog/poly1.jpg';
import poly2 from '../../../../resources/beautypage/images/blog/poly2.jpg';
import poly3 from '../../../../resources/beautypage/images/blog/poly3.jpg';
import poly4 from '../../../../resources/beautypage/images/blog/poly4.jpg';
import poly5 from '../../../../resources/beautypage/images/blog/poly5.jpg';
import poly6 from '../../../../resources/beautypage/images/blog/poly6.jpg';
import BlogItem from "./BlogItem";

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

const BlogList = ({}) => {
    const hasAnimation = props.hasAnimation;
    const hasAnimationClass = hasAnimation ? 'fade-in-out up-in-out' : '';
    const animationDataDuration = hasAnimation ? 0 : 'none';
    // we can also add custom attribute to html node custom-data=xxx
    return (
        <>
            <div className="col s12 center">
                <h1>blog</h1>
                <div className="row masonry-grid">

                    <BlogItem
                        blogRef="blog.html"
                        blogTitle="Something Interesting"
                        blogImg={poly1}
                        hasAnimationClass={hasAnimationClass} animationDataDuration={animationDataDuration} />
                    <BlogItem
                        blogRef="blog.html"
                        blogTitle="Another Blog Post"
                        blogImg={poly2}
                        hasAnimationClass={hasAnimationClass} animationDataDuration={animationDataDuration} />
                    <BlogItem
                        blogRef="blog.html"
                        blogTitle="Click Bait Article"
                        blogImg={poly3}
                        hasAnimationClass={hasAnimationClass} animationDataDuration={animationDataDuration} />
                    <BlogItem
                        blogRef="blog.html"
                        blogTitle="Don't Read This!"
                        blogImg={poly4}
                        hasAnimationClass={hasAnimationClass} animationDataDuration={animationDataDuration} />
                    <BlogItem
                        blogRef="blog.html"
                        blogTitle="Why Are You Still Reading?"
                        blogImg={poly5}
                        hasAnimationClass={hasAnimationClass} animationDataDuration={animationDataDuration} />
                    <BlogItem
                        blogRef="blog.html"
                        blogTitle="Good Bye"
                        blogImg={poly6}
                        hasAnimationClass={hasAnimationClass} animationDataDuration={animationDataDuration} />
                </div>
            </div>
        </>
    );
}

BlogList.propTypes = propTypes;

export default BlogList;
