import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
import '../../../../../../resources/beautypage/css/radiobutton-checkbox.css';
import { generateKey } from '../../../../utils/keyGenerator';

function InputSelect(props) {
    const defaultValue = props.defaultValue ? props.defaultValue : 0;
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const validate = props.validate;
    const multipleAttr = props.multiple ? { "multiple": true } : {}

    const optionSelectRef = useRef(null);
    useEffect(() => {
        M.FormSelect.init(optionSelectRef.current, props.properties);
    }, []);
    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {props.headerText && (<p>{props.headerText}</p>)} {/* or <label>Options Select</label> */}
            {props.icon && (<i className="material-icons prefix">{props.icon}</i>)}
            <select id={props.id} name="optionselect" disabled={props.disabled}
                ref={optionSelectRef} defaultValue={props.defaultValue} {...multipleAttr}>
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

export default InputSelect;
