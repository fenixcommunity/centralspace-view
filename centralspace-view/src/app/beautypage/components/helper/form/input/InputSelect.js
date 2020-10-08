import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';
import '../../../../../../resources/beautypage/css/radiobutton-checkbox.css';
import { generateKey } from '../../../../utils/keyGenerator';
import Icon from "../../Icon";

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

const InputSelect = ({ }) => {
    const defaultValue = props.defaultValue ? props.defaultValue : 0;
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const multipleAttr = props.multiple ? { "multiple": true } : {}

    const optionSelectRef = useRef(null);
    useEffect(() => {
        M.FormSelect.init(optionSelectRef.current, props.properties);
    }, [props.properties]);
    
    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {props.headerText && (<p>{props.headerText}</p>)} {/* or <label>Options Select</label> */}
            {props.icon && <Icon icon={props.icon} iconColor={props.iconColor}/>}
            <select id={props.id} name="optionselect" disabled={props.disabled}
                ref={optionSelectRef} defaultValue={defaultValue} {...multipleAttr}>
                {!props.optionGroups ?
                    (
                        <>
                            {props.label && (
                                <option value={0} disabled={true}>
                                    {props.label}
                                </option>
                            )}
                            {props.options.map(option => {
                                const iconAttr = option.icon ? { "data-icon": option.icon } : {};
                                return (
                                    <option key={generateKey(option.value)} value={option.value} {...iconAttr}>
                                        {option.label}
                                    </option>
                                )
                            }
                            )}
                        </>
                    ) : (
                        <>
                            {props.optionGroups && props.optionGroups.map(group => (
                                <optgroup key={group.id} id={group.id} label={group.label}>
                                    {group.options && group.options.map(option => (
                                        <option key={generateKey(option.value)} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </>
                    )}
            </select>
        </div>
    )
}

InputSelect.propTypes = propTypes;

export default InputSelect;
