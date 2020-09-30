import React, { useEffect, useRef } from "react";
import '../../../../../resources/beautypage/css/chips.css';
import M from 'materialize-css/dist/js/materialize.js';

function InputTags(props) {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const validate = props.validate;
    const initialTagsClass = props.initial ? "chips-initial" : "";
    const autocompleteTagsClass = props.autocomplete ? "chips-autocomplete" : "";

    const chipsRef = useRef(null);

    useEffect(() => {
        if (props.properties) {
            M.Chips.init(chipsRef.current, props.properties);
        }
    }, []);

    return (
        <div className={`basic-top-break col ${duplicatedClass}`}>
            <div id={props.id}
                className={`chips ${initialTagsClass} ${autocompleteTagsClass}`}
                ref={chipsRef}></div>
        </div>
    )
}

export default InputTags
