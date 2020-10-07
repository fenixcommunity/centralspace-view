import React from 'react';
import '../../../../../../resources/beautypage/css/chips.css';

function Tags(props) {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const validate = props.validate;
    const tags = props.tags;

    return (
        <div className={`basic-top-break col ${duplicatedClass}`}>
            {tags && tags.map(tag => (
                <div key={tag.id} id={tag.id} className="chip">
                    {tag.image && (<img src={tag.image} alt="tag" />)}
                    {tag.label}
                    {tag.close && (<i className="close material-icons">close</i>)}
                </div>
            )
            )}
        </div>
    )
}

export default Tags;