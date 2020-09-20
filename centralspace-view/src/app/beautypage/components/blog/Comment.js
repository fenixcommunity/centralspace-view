import React from 'react'

function Comment(props) {
    return (
        <li className="collection-item avatar">
        <div className="avatar-wrapper circle">
            <div className="avatar">
                <img src={props.authorAvatar} alt="" />
            </div>
        </div>
    <span className="title">{props.title}</span>
    <p className="grey-text">{props.content}</p>
        <a href={props.emailRef} className="secondary-content">
            <i className="material-icons primary-color-text">email</i>
        </a>
    </li>
    )
}

export default Comment;
