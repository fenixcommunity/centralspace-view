import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';
import '../../../../../../resources/beautypage/css/datatimepicker.css';
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

const InputDatepicker = ({}) => {
    const datepickerRef = useRef(null);
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const validate = props.validate;

    const initCalendarDefault = useCallback(() => {
        return M.Datepicker.init(datepickerRef.current,
            props.settings ? props.settings :
                {
                    autoClose: false,
                    format: "dd/mm/yyyy",
                    disableWeekends: true,
                    yearRange: 5,
                    i18n: {
                        months: ['Styczeń', 'Luty', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        monthsShort: ['Sty', 'Luty', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        weekdaysShort: ['Pon', 'Wt', 'Śr', 'Wed', 'Thu', 'Fri', 'Sat']
                    }
                }
        );
    }, [props.settings]);

    useEffect(() => {
        initCalendarDefault();
    }, [initCalendarDefault]);

    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {props.icon && <Icon icon={props.icon} iconColor={props.iconColor}/>}
            <input
                id={props.id}
                type="text"
                ref={datepickerRef}
                className={`datepicker ${validate ? "validate" : ""}`}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

InputDatepicker.propTypes = propTypes;

export default InputDatepicker
