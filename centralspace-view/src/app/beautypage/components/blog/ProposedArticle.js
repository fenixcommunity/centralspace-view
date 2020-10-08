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

const ProposedArticle = ({}) => {
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

ProposedArticle.propTypes = propTypes;

export default ProposedArticle;
