import React from 'react'

const propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    authorAvatar: PropTypes.node.isRequired,
    rightIcon: PropTypes.objectOf(
        PropTypes.shape({
            ref: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    )
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
