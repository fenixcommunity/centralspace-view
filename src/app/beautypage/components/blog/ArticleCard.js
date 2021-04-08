import React from 'react';
import PropTypes from 'prop-types';
import { generateKey } from '../../utils/keyGenerator';
import ActionButton from '../helper/form/button/ActionButton';

const propTypes = {
    isHoverable: PropTypes.bool.isRequired,
    handleToastOnClick: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            ref: PropTypes.string.isRequired
        })
    ).isRequired,
    articleImg: PropTypes.node.isRequired,
    articleTitle: PropTypes.string.isRequired,
    articleContent: PropTypes.node.isRequired,
    finalQuote: PropTypes.node.isRequired,
}

const ArticleCard = ({ isHoverable, handleToastOnClick, cardAction, articleImg, articleTitle, articleContent, finalQuote }) => {
    const hoverableClass = isHoverable ? 'hoverable' : "";
    return (
        <div className={`col s12 l6 ${hoverableClass}`}>
            <div className="card">
                <div className="card-image">
                    <img src={articleImg} alt="" />
                    {handleToastOnClick && (
                        <ActionButton
                            id="save" icon="favorite"
                            classes="halfway-fab" color="pink"
                            buttonFloating={true} pulseEffect={true}
                            actions={{ onClick: handleToastOnClick }} />
                    )}
                </div>
                <div className="card-content">
                    <span className="card-title">{articleTitle}</span>
                    {articleContent}
                    {finalQuote}
                </div>
                <div className="card-action">
                    {cardAction && cardAction.map(action => {
                        const title = action.title;
                        return (
                            <a key={generateKey(title)} className="teal-text text-lighten-2" href={action.ref}>{title}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

ArticleCard.propTypes = propTypes;

export default ArticleCard;
