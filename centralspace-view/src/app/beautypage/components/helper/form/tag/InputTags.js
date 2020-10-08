import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import '../../../../../../resources/beautypage/css/chips.css';
import M from 'materialize-css/dist/js/materialize.js';

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

const InputTags = ({ }) => {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const initialTagsClass = props.initial ? "chips-initial" : "";
    const autocompleteTagsClass = props.autocomplete ? "chips-autocomplete" : "";

    const chipsRef = useRef(null);

    useEffect(() => {
        if (props.properties) {
            M.Chips.init(chipsRef.current, props.properties);
        }
    }, [props.properties]);

    return (
        <div className={`basic-top-break col ${duplicatedClass}`}>
            <div id={props.id}
                className={`chips ${initialTagsClass} ${autocompleteTagsClass}`}
                ref={chipsRef}></div>
        </div>
    )
}

InputTags.propTypes = propTypes;

export default InputTags
