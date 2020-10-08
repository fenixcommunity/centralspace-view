import React from 'react';
import PropTypes from 'prop-types';
import Divider from '../helper/Divider';
import { getImageFromResources } from '../../utils/imageLazyFinder';

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

const BlogSectionFooter = ({}) => {
    const author = props.authorOfArticles
    const avatar = getImageFromResources('people', author.avatar);
    return (
        <div className="col s8 offset-s2 m6 offset-m3 blog-author">
            <Divider />
            <div className="avatar-wrapper">
                <div className="avatar">
                    <img src={avatar} alt="" />
                </div>
            </div>
            <div className="author">
                <span>Author</span>
                {author.name}
            </div>
            <div className="date">
                <span>{author.yearOfPost}</span>
                {author.monthOfPost}
            </div>
            <Divider />
        </div>
    )
}

BlogSectionFooter.propTypes = propTypes;

export default BlogSectionFooter;
