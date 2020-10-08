import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import '../../../../../../resources/beautypage/css/chips.css';
import M from 'materialize-css/dist/js/materialize.js';

const propTypes = {
    id: PropTypes.string.isRequired,
    isDuplicated: PropTypes.bool,
    initial: PropTypes.bool,
    autocomplete: PropTypes.bool,
    properties: PropTypes.object
}

const InputTags = ({ id, isDuplicated, initial, autocomplete, properties }) => {
    const duplicatedClass = isDuplicated ? "s6" : "s12"
    const initialTagsClass = initial ? "chips-initial" : "";
    const autocompleteTagsClass = autocomplete ? "chips-autocomplete" : "";

    const chipsRef = useRef(null);

    useEffect(() => {
        if (properties) {
            M.Chips.init(chipsRef.current, properties);
        }
    }, [properties]);

    return (
        <div className={`basic-top-break col ${duplicatedClass}`}>
            <div id={id}
                className={`chips ${initialTagsClass} ${autocompleteTagsClass}`}
                ref={chipsRef}></div>
        </div>
    )
}

InputTags.propTypes = propTypes;

export default InputTags
