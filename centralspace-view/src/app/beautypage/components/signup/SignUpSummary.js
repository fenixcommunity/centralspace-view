
import React, { useEffect, useRef } from "react";
import '../../../../resources/beautypage/css/table.css';
import '../../../../resources/beautypage/css/chips.css';
import '../../../../resources/beautypage/css/tap-target.css';
import '../../../../resources/beautypage/css/nouislider.css';
import '../../../../resources/beautypage/css/range.css';
import '../../../../resources/beautypage/css/radiobutton-checkbox.css';
import '../../../../resources/beautypage/css/helper-text-validator.css';
import '../../../../resources/beautypage/css/stepper/mstepper.css';
import M from 'materialize-css/dist/js/materialize.js';
import avatar from '../../../../resources/beautypage/images/people/avatar4.jpg';
import BasicSection from "../helpers/BasicSection";
import FormTemplate from "../form/FormTemplate";

function SignUpSummary() {
    const collapsibleRef = useRef(null);
    const collapsiblePopupRef = useRef(null);
    const tapTargetRef = useRef(null);
    const modalRef = useRef(null);
    const autocompleteRef = useRef(null);
    const chipsRef = useRef(null);
    const initialChipsRef = useRef(null);
    const placeholderChipsRef = useRef(null);
    const autocompleteChipsRef = useRef(null);
    const timepickerRef = useRef(null);
    const optionSelectRef1 = useRef(null);
    const optionSelectRef2 = useRef(null);
    const optionSelectRef3 = useRef(null);
    const optionSelectRef4 = useRef(null);
    const optionSelectRef5 = useRef(null);
    const stepperRef = useRef(null);

    useEffect(() => {
        M.Collapsible.init(collapsibleRef.current, {});
        M.Collapsible.init(collapsiblePopupRef.current, {
            accordion: false
        });
        M.Modal.init(modalRef.current, {});
        const instances = initAutocomplete();
        // instance.updateData({...});
        initChips();
        M.Timepicker.init(timepickerRef.current,
            { showClearBtn: true });
        M.FormSelect.init(optionSelectRef1.current, { isMultiple: true });
        M.FormSelect.init(optionSelectRef2.current, {});
        M.FormSelect.init(optionSelectRef3.current, {});
        M.FormSelect.init(optionSelectRef4.current, {});
        M.FormSelect.init(optionSelectRef5.current, {});
    }, []);

    const selectImages = [
        { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', title: 'foo', description: 'bar' },
        { id: 2, src: 'https://websetnet.net/wp-content/uploads/2018/09/unnamed-file-530.jpg', title: 'foo', description: 'bar' },
        { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', title: 'foo', description: 'bar' },
    ];

    // todo, add helper!
    //   { images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)

    const getImg = (id) => {
        return selectImages.find(img => img.id === id);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit")
    }

    const handleOnClick = () => {
        let tap = M.TapTarget.getInstance(tapTargetRef.current);
        if (!tap) {
            tap = M.TapTarget.init(tapTargetRef.current);
        }

        if (tap.isOpen) { tap.close(); }
        else { tap.open(); }
    }

    const dataToAutocomplete = {
        "Azure": null,
        "Apple": 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
        "Microsoft": null,
        "Google": 'https://websetnet.net/wp-content/uploads/2018/09/unnamed-file-530.jpg'
    };

    const initAutocomplete = () => {
        return M.Autocomplete.init(
            autocompleteRef.current,
            {
                data: dataToAutocomplete,
                minLength: 1,
                limit: 20,
                sortFunction: (a, b, inputString) => {
                    return a.indexOf(inputString) - b.indexOf(inputString);
                },
                onAutocomplete: (inputString) => { alert("Done!") }
            }
        );
    }

    const initChips = () => {
        M.Chips.init(chipsRef.current, {
            placeholder: 'Enter a tag',
        });
        M.Chips.init(initialChipsRef.current,
            {
                placeholder: 'Enter a tag',
                readOnly: true,
                data: [{ tag: 'Apple' }, { tag: 'Microsoft' }, { tag: 'Google' }],
            }
        );
        M.Chips.init(placeholderChipsRef.current,
            {
                placeholder: 'Enter a placeholder tag',
                secondaryPlaceholder: '+Tag',
            }
        );
        M.Chips.init(autocompleteChipsRef.current,
            {
                placeholder: 'Enter a autocomplete tag',
                autocompleteOptions: {
                    data: dataToAutocomplete
                },
                limit: Infinity,
                minLength: 1
            });
    }

    return (
        <>
            <BasicSection
                theme="light"
                wrappedSection={(
                    <FormTemplate
                        formId="form1"
                        headerText="Summary"
                        formContent="" />
                )}
            />
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

            <BasicSection
                large={true}
                wrappedSection={(
                    <FormTemplate
                        formId="form2"
                        formContent="" />
                )}
            />
            <div className="section section-large-size valign-wrapper">
                <div className="container">
                    <form>
                        <div className="row">

                            <div className="input-field col s12">
                                <i className="material-icons prefix">message</i>
                                <textarea
                                    id="message2"
                                    className="materialize-textarea"
                                    cols={20}
                                    rows={20}
                                    defaultValue={""}
                                />
                                <label htmlFor="message2">Your Message</label>
                            </div>

                            <div className="input-field col s12">
                                <i className="material-icons prefix">textsms</i>
                                <input type="text" id="autocomplete-input" className="autocomplete" ref={autocompleteRef} />
                                <label htmlFor="autocomplete-input">Autocomplete</label>
                            </div>

                            <div className="input-field col s12">
                                <input id="timepicker" type="text" className="timepicker" ref={timepickerRef} />
                                <label htmlFor="timepicker">Select time</label>
                            </div>

                            <div className="col s12 basic-top-break">
                                <div className="chips" ref={chipsRef}></div>
                            </div>

                            <div className="col s12 basic-top-break">
                                <div className="chips chips-initial" ref={initialChipsRef}></div>
                            </div>

                            <div className="col s12 basic-top-break">
                                <div className="chip"> <img src={avatar} alt="Contact Person" /> Jane Doe</div>
                                <div className="chip"> Tag <i className="close material-icons">close</i>
                                </div>
                            </div>

                            <div className="col s12 basic-top-break">
                                <div className="chips " ref={placeholderChipsRef}></div>
                            </div>
                            <div className="col s12 basic-top-break">
                                <div className="chips chips-autocomplete" ref={autocompleteChipsRef}></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <BasicSection
                theme="light" large={true}
                wrappedSection={(
                    <FormTemplate
                        formId="form3"
                        headerText="Others"
                        formContent="" />
                )}
            />
            <div className="section section-large-size light valign-wrapper">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col s12">
                                <h2 className="section-title">Others</h2>
                            </div>

                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="input-field col s12">
                                <p>Multiple Select</p>
                                <select multiple ref={optionSelectRef1} defaultValue={[1, 3]}>
                                    <option value={0} disabled>
                                        Choose your option
                                    </option>
                                    <option value={1}>Option 1</option>
                                    <option value={2}>Option 2</option>
                                    <option value={3}>Option 3</option>
                                </select>
                            </div>
                            <div className="input-field col s12">
                                <select ref={optionSelectRef3}>
                                    <optgroup label="team 1">
                                        <option value={1}>Option 1</option>
                                        <option value={2}>Option 2</option>
                                    </optgroup>
                                    <optgroup label="team 2">
                                        <option value={3}>Option 3</option>
                                        <option value={4}>Option 4</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="input-field col s12 m6">
                                <p>Images in select</p>
                                <select className="icons" ref={optionSelectRef4} defaultValue={0}>
                                    <option value={0} disabled>
                                        Choose your option
                                    </option>
                                    <option value={1} data-icon={getImg(1).src}>
                                        example 1
                                    </option>
                                    <option value={2} data-icon={getImg(2).src}>
                                        example 2
                                    </option>
                                    <option value={3} data-icon={getImg(3).src}>
                                        example 3
                                    </option>
                                </select>

                            </div>
                            <div className="input-field col s12 m6">
                                <p>Images in select</p>
                                <select className="icons" ref={optionSelectRef5} defaultValue={0}>
                                    <option value={0} disabled>
                                        Choose your option
                                    </option>
                                    <option value={1} data-icon={getImg(2).src} className="left">
                                        example 1
                                    </option>
                                    <option value={2} data-icon={getImg(3).src} className="left">
                                        example 2
                                    </option>
                                    <option value={3} data-icon={getImg(1).src} className="left">
                                        example 3
                                    </option>
                                </select>
                            </div>


                            <div className="input-field col s12">
                                <i className="material-icons prefix">playlist_add_check</i>
                                <select disabled={true} name="optionselect" id="color" ref={optionSelectRef2} defaultValue={0}>
                                    <option value={0} disabled={true}>
                                        Disabled option
                                    </option>
                                    <option value={1}>Option 1</option>
                                    <option value={2}>Option 2</option>
                                    <option value={3}>Option 3</option>
                                </select>
                            </div>

                            <div className="input-field col s12">
                                <button
                                    id="reset"
                                    className="btn waves-effect waves-light grey"
                                    type="button"
                                    name="reset"
                                >
                                    Reset
                                <i className="material-icons right">clear_all</i>
                                </button>
                                <span id="status" />
                                <button
                                    id="save"
                                    className="btn waves-effect waves-light"
                                    type="submit"
                                    name="action"
                                >
                                    Save
                                <i className="material-icons right">send</i>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <BasicSection
                wrappedSection={(
                    <FormTemplate
                        formId="form4"
                        formContent="" />
                )}
            />
            <div className="section valign-wrapper">
                <div className="container">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Email validator</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>

                        <div className="file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>

                        <div className="file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" multiple />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>

            <BasicSection
                theme="white"
                wrappedSection={(
                    <FormTemplate
                        formId="form5"
                        formContent="" />
                )}
            />
            <div className="section white valign-wrapper">
                <div className="container">
                    <div className="row">
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

                        <div className="col s12 basic-top-break ">
                            <a className="modal-trigger waves-effect waves-light btn grey" href="#modal">Modal</a>

                            <div id="modal" className="modal bottom-sheet" ref={modalRef} >
                                <div className="modal-content">
                                    <h3 className="header">Modal Header</h3>
                                    <ul className="collection">
                                        <li className="collection-item avatar">
                                            <img src={avatar} alt="" className="circle" />
                                            <span className="title">Title</span>
                                            <p>First Line
                                            <br />
                                            Second Line
                                            </p>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons">grade</i>
                                            </a>
                                        </li>
                                        <li className="collection-item avatar">
                                            <i className="material-icons circle">folder</i>
                                            <span className="title">Title</span>
                                            <p>First Line
                                            <br />
                                            Second Line
                                            </p>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons">grade</i>
                                            </a>
                                        </li>
                                        <li className="collection-item avatar">
                                            <i className="material-icons circle green">assessment</i>
                                            <span className="title">Title</span>
                                            <p>First Line
                                            <br />
                                            Second Line
                                            </p>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons">grade</i>
                                            </a>
                                        </li>
                                        <li className="collection-item avatar">
                                            <i className="material-icons circle red">play_arrow</i>
                                            <span className="title">Title</span>
                                            <p>First Line
                                            <br />
                                            Second Line
                                            </p>
                                            <a href="#!" className="secondary-content">
                                                <i className="material-icons">grade</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-close btn waves-effect waves-light teal lighten-2 btn-flat">Agree</a>
                                </div>
                            </div>
                        </div>

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

                        <div className="col s12 basic-top-break">
                            <div id="range-slider"></div> {/* initialized in init.js */}
                            <form className="basic-top-break" action="#">
                                <p className="range-field">
                                    <input type="range" id="test5" min="0" max="100" />
                                </p>
                            </form>
                        </div>

                        <div className="col s12 basic-top-break">
                            <div className="switch">
                                <label>
                                    Off
                                <input type="checkbox" />
                                    <span className="lever"></span>
                                    On
                                </label>
                            </div>
                            <div className="switch">
                                <label>
                                    Off
                                <input disabled={true} type="checkbox" />
                                    <span className="lever"></span>
                                    On
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BasicSection
                theme="white" large={true}
                wrappedSection=""
            />
            <div className="section section-large-size white valign-wrapper">
                <div className="container">

                    <div className="row">
                        <div className="col l6 m10 s12  offset-l3 offset-m1">
                            {/* <div className="col xl4 l6 m10 s12 offset-xl4 offset-l3 offset-m1"> */}
                            <h3 className="light center-align blue-text">Sign up form</h3>
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={handleFormSubmit}>
                                        <ul className="stepper linear" ref={stepperRef}>
                                            {/* <ul data-method="GET" className="stepper linear" ref={stepperRef}> */}
                                            <li className="step active">
                                                <div className="step-title waves-effect waves-dark">Basic data</div>
                                                <div className="step-content">
                                                    <div className="row">

                                                        <div className="input-field col s12">
                                                            <i className="material-icons prefix  blue-text">message</i>
                                                            <input id="first_name" type="text" minLength="2" maxLength="10" data-length="10"
                                                                className="validate" required={true} autoComplete="off" />
                                                            <label htmlFor="first_name">Your login</label>
                                                        </div>

                                                        <div className="input-field col s12">
                                                            <input id="email" name="email" type="email" className="validate" required={true} autoComplete="off" />
                                                            <label htmlFor="email">Your e-mail</label>
                                                            <p className="helper-text" data-error="wrong" data-success="right"></p>
                                                        </div>

                                                    </div>
                                                    <div className="step-actions">
                                                        <button className="waves-effect waves-dark btn blue next-step" onClick={() => ""}>Continue</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="step">
                                                <div className="step-title waves-effect waves-dark">Password</div>
                                                <div className="step-content">
                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <input id="password" name="password" type="password" className="validate" required={true} autoComplete="off" />
                                                            <label htmlFor="password">Your password</label>
                                                        </div>
                                                        <div className="input-field col s12">
                                                            <input id="password" name="password" type="password" className="validate" required={true} autoComplete="off" />
                                                            <label htmlFor="password">Repeat password</label>
                                                        </div>
                                                    </div>
                                                    <div className="step-actions">
                                                        <button className="waves-effect waves-dark btn blue next-step">Continue</button>
                                                        <button className="waves-effect waves-dark btn-flat previous-step">Back</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="step">
                                                <div className="step-title waves-effect waves-dark">Summary</div>
                                                <div className="step-content">
                                                    We've just sent you an activation email
                                        <div className="step-actions">
                                                        <button className="waves-effect waves-dark btn blue"
                                                            type="submit">Log in</button>
                                                        {/* <button className="waves-effect waves-dark btn blue" data-feedback="someFunction">Log in</button> */}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light grey" id="controlled_reset">Clear form data</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SignUpSummary;
