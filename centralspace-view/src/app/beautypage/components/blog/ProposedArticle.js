import React from 'react'

function ProposedArticle(props) {
    return (
        <li>
            <a href="#!">
                <span className="avatar-wrapper">
                    <span className="avatar">
                        <img src={props.authorAvatar} alt="" />
                    </span>
                </span>
                <span className="title">{props.articleTitle}</span>
                <span className="date">{props.date}</span>
            </a>
        </li>
    )
}

export default ProposedArticle;
