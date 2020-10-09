import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';
import '../../../../../../resources/beautypage/css/datatimepicker.css';
import Icon from "../../Icon";

const propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    settings: PropTypes.object,
    validate: PropTypes.object,
    isDuplicated: PropTypes.bool
}

const InputDatepicker = ({ id, label, icon, iconColor, settings, validate, isDuplicated }) => {
    const datepickerRef = useRef(null);
    const duplicatedClass = isDuplicated ? "s6" : "s12"

    const initCalendarDefault = useCallback(() => {
        return M.Datepicker.init(datepickerRef.current,
            settings ? settings :
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
    }, [settings]);

    useEffect(() => {
        initCalendarDefault();
    }, [initCalendarDefault]);

    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {icon && <Icon icon={icon} iconColor={iconColor} />}
            <input
                id={id}
                type="text"
                ref={datepickerRef}
                className={`datepicker ${validate ? "validate" : ""}`}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

InputDatepicker.propTypes = propTypes;

export default InputDatepicker
