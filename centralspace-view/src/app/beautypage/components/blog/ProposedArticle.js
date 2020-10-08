import React from 'react'

const propTypes = {
    authorAvatar: PropTypes.node.isRequired,
    articleTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

const ProposedArticle = ({ authorAvatar, articleTitle, date }) => {
    return (
        <li>
            <a href="#!">
                <span className="avatar-wrapper">
                    <span className="avatar">
                        <img src={authorAvatar} alt="" />
                    </span>
                </span>
                <span className="title">{articleTitle}</span>
                <span className="date">{date}</span>
            </a>
        </li>
    )
}

ProposedArticle.propTypes = propTypes;

export default ProposedArticle;
