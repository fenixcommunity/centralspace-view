import React from 'react';
import Divider from '../helper/Divider';
import { getImageFromResources } from '../../utils/imageLazyFinder';

function BlogSectionFooter(props) {
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

export default BlogSectionFooter;
