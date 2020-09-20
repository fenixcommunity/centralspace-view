import React from 'react';

function ArticleCard(props) {
    const hoverableClass = props.isHoverable ? 'hoverable' : "";
    return (
        <div className={`col s12 l6 ${hoverableClass}`}>
            <div className="card">
                <div className="card-image">
                    <img src={props.articleImg} alt="" />
                    {props.handleToastOnClick && (
                        <a onClick={props.handleToastOnClick} className="halfway-fab btn-floating pink pulse">
                            <i className="material-icons">favorite</i>
                        </a>
                    )}
                </div>
                <div className="card-content">
                    <span className="card-title">{props.articleTitle}</span>
                    {props.articleContent}
                    {props.finalQuote}
                </div>
                <div className="card-action">
                   {props.cardAction && props.cardAction.map(action => {
                       return (
                       <a className="teal-text text-lighten-2" href={action.ref}>{action.title}</a>
                       )
                   })}
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;
