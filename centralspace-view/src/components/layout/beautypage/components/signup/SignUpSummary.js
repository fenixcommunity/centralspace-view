
import React, { useEffect, useRef } from "react";
import '../../../../../resources/beautypage/css/table.css';
import '../../../../../resources/beautypage/css/tap-target.css';
import M from 'materialize-css/dist/js/materialize.js';

function SignUpSummary() {
    const collapsibleRef = useRef(null);
    const collapsiblePopupRef = useRef(null);
    const tapTargetRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        M.Collapsible.init(collapsibleRef.current, {});
        M.Collapsible.init(collapsiblePopupRef.current, {
            accordion: false
        });
        M.Modal.init(modalRef.current, {});
    }, []);

    const handleOnClick = () => {
        let tap = M.TapTarget.getInstance(tapTargetRef.current);
        if (!tap) {
            tap = M.TapTarget.init(tapTargetRef.current);
        }

        if (tap.isOpen) { tap.close(); }
        else { tap.open(); }
    }

    return (
        <>
            <div className="section light valign-wrapper">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col s12">
                                <h2 className="section-title">Summary</h2>
                            </div>

                            <div className="col s12">
                                <table className="highlight centered responsive-table">
                                    {/* <table className="striped highlight"> */}
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
                                <ul className="pagination">
                                    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                                    <li className="active"><a href="#!">1</a></li>
                                    <li className="waves-effect"><a href="#!">2</a></li>
                                    <li className="waves-effect"><a href="#!">3</a></li>
                                    <li className="waves-effect"><a href="#!">4</a></li>
                                    <li className="waves-effect"><a href="#!">5</a></li>
                                    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div >
            </div >

            <div className="section white">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <ul className="collapsible" ref={collapsibleRef}>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
                        </div>

                        <div className="col s12">
                            <ul className="collapsible popout" ref={collapsiblePopupRef}>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
                        </div>

                        <div className="col s12">
                            <a className="btn waves-effect waves-light teal lighten-2" onClick={handleOnClick}>Open tap target</a>
                            <div className="fixed-action-btn direction-top active" >
                                <a id="menu" className="btn btn-floating btn-large cyan" onClick={handleOnClick}>
                                    <i className="material-icons">menu</i>
                                </a>
                            </div>

                            <div className="tap-target-wrapper">
                                <div className="tap-target cyan" data-target="menu" ref={tapTargetRef}>
                                    <div className="tap-target-content white-text" >
                                        <h5>I am here</h5>
                                        <p className="white-text">
                                            Provide value and encourage return visits by introducing users to new features and functionality at contextually
                                            relevant moments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div classTODOName="container valign-wrapper">
                    <div className="row">
                        <div className="col s12">
                            <a className="waves-effect waves-light btn modal-trigger" href="#modal">Modal</a>

                            <div id="modal" className="modal bottom-sheet" ref={modalRef} >
                                <div className="modal-content">
                                    <h4>Modal Header</h4>
                                    <p>A bunch of text</p>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignUpSummary;
