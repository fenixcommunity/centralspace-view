import React from 'react'

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

const Comment = ({}) => {
    const rightIcon = props.rightIcon;
    return (
        <li className="collection-item avatar">
            <div className="avatar-wrapper circle">
                <div className="avatar">
                    <img src={props.authorAvatar} alt="" />
                </div>
            </div>
            <span className="title">{props.title}</span>
            {props.content}
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
