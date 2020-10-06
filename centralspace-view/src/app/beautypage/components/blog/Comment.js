import React from 'react'

function Comment(props) {
    const rightIcon = props.rightIcon;
    return (
        <li className="collection-item avatar">
            <div className="avatar-wrapper circle">
                <div className="avatar">
                    <img src={props.authorAvatar} alt="" />
                </div>
            </div>
            <span className="title">{props.title}</span>
            <p className="grey-text">{props.content}</p>
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

export default Comment;
