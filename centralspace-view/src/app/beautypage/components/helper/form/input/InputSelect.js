import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';
import '../../../../../../resources/beautypage/css/radiobutton-checkbox.css';
import { generateKey } from '../../../../utils/keyGenerator';
import Icon from "../../Icon";

const propTypes = {
    label: PropTypes.string,
    headerText: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    id: PropTypes.number,
    defaultValue: PropTypes.number,
    isDuplicated: PropTypes.bool,
    multiple: PropTypes.bool,
    disabled: PropTypes.bool,
    properties: PropTypes.object.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
    optionGroups: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    )
}

const InputSelect = ({ label, headerText, icon, iconColor, id, defaultValue, isDuplicated, multiple, disabled, properties, options, optionGroups }) => {
    const defaultVal = defaultValue ? defaultValue : 0;
    const duplicatedClass = isDuplicated ? "s6" : "s12"
    const multipleAttr = multiple ? { "multiple": true } : {}

    const optionSelectRef = useRef(null);
    useEffect(() => {
        M.FormSelect.init(optionSelectRef.current, properties);
    }, [properties]);

    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {headerText && (<p>{headerText}</p>)} {/* or <label>Options Select</label> */}
            {icon && <Icon icon={icon} iconColor={iconColor} />}
            <select id={id} name="optionselect" disabled={disabled}
                ref={optionSelectRef} defaultValue={defaultVal} {...multipleAttr}>
                {!optionGroups ?
                    (
                        <>
                            {label && (
                                <option value={0} disabled={true}>
                                    {label}
                                </option>
                            )}
                            {options.map(option => {
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
                            {optionGroups && optionGroups.map(group => (
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
