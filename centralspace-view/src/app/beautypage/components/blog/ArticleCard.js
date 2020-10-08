import React from 'react';
import { generateKey } from '../../utils/keyGenerator';
import ActionButton from '../helper/form/button/ActionButton';

function ArticleCard(props) {
    const hoverableClass = props.isHoverable ? 'hoverable' : "";
    const onClickAction = props.handleToastOnClick
    return (
        <div className={`col s12 l6 ${hoverableClass}`}>
            <div className="card">
                <div className="card-image">
                    <img src={props.articleImg} alt="" />
                    {props.handleToastOnClick && (
                        <ActionButton
                            id="save" icon="favorite"
                            classes="halfway-fab" color="pink"
                            buttonFloating={true} pulseEffect={true}
                            actions={{ onClick: onClickAction }} />
                    )}
                </div>
                <div className="card-content">
                    <span className="card-title">{props.articleTitle}</span>
                    {props.articleContent}
                    {props.finalQuote}
                </div>
                <div className="card-action">
                    {props.cardAction && props.cardAction.map(action => {
                        const title = action.title;
                        return (
                            <a href="#!" key={generateKey(title)} className="teal-text text-lighten-2" href={action.ref}>{title}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;
