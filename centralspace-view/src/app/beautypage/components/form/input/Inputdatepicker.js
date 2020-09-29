import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
import '../../../../../resources/beautypage/css/datatimepicker.css';

function Inputdatepicker(props) {
    const datepickerRef = useRef(null);
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const validate = props.validate;

    useEffect(() => {
        initCalendarDefault(props.settings);
    }, []);

    const initCalendarDefault = (settings) => {
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
    }

    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {props.icon && (<i className="material-icons prefix">{props.icon}</i>)}
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

export default Inputdatepicker
