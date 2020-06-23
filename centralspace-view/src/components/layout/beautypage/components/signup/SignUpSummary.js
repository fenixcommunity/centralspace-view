
import React, { useEffect, useRef } from "react";
import '../../../../../resources/beautypage/css/datapicker.css';
import '../../../../../resources/beautypage/css/radiobutton.css';
import M from 'materialize-css/dist/js/materialize.js';

function SignUpSummary() {
    const datepickerRef = useRef(null);
    const optionSelectRef1 = useRef(null);
    const optionSelectRef2 = useRef(null);

    useEffect(() => {
        let datepicker = M.Datepicker.init(datepickerRef.current, { disableWeekends: true, yearRange: 1 });
        M.FormSelect.init(optionSelectRef1.current, {});
        M.FormSelect.init(optionSelectRef2.current, {});
    }, []);
    return (
        <div className="section light valign-wrapper">
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col s12">
                            <h2 className="section-title">Contact Us</h2>
                        </div>

                        <div className="col s12">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Item Name</th>
                                        <th>Item Price</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>
                                    <tr>
                                        <td>Alan</td>
                                        <td>Jellybean</td>
                                        <td>$3.76</td>
                                    </tr>
                                    <tr>
                                        <td>Jonathan</td>
                                        <td>Lollipop</td>
                                        <td>$7.00</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default SignUpSummary;
