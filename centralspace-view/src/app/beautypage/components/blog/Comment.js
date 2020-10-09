import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    authorAvatar: PropTypes.node.isRequired,
    rightIcon: PropTypes.objectOf(PropTypes.string).isRequired // objectOf when tha same types in object
}

const Comment = ({ title, content, authorAvatar, rightIcon }) => {
    return (
        <li className="collection-item avatar">
            <div className="avatar-wrapper circle">
                <div className="avatar">
                    <img src={authorAvatar} alt="" />
                </div>
            </div>
            <span className="title">{title}</span>
            {content}
            {rightIcon &&
                (
                    <button href={rightIcon.ref} className="secondary-content">
                        <i className={`material-icons ${rightIcon.color}`}>{rightIcon.icon}</i>
                    </button>
                )
            }
        </li>
    )
}

Comment.propTypes = propTypes;

export default Comment;
