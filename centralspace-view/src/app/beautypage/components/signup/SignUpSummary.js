
import React, { useEffect, useRef } from "react";
import '../../../../resources/beautypage/css/tap-target.css';
import '../../../../resources/beautypage/css/nouislider.css';
import '../../../../resources/beautypage/css/range.css';
//todo css where?
import '../../../../resources/beautypage/css/helper-text-validator.css';
import '../../../../resources/beautypage/css/stepper/mstepper.css';
import M from 'materialize-css/dist/js/materialize.js';
import avatar from '../../../../resources/beautypage/images/people/avatar4.jpg';
import BasicSection from "../helper/BasicSection";
import FormTemplate from "../form/FormTemplate";
import Table from "../form/table/Table";
import Pagination from "../form/table/Pagination";
import InputTextArea from "../form/input/InputTextArea";
import InputText from "../form/input/InputText";
import InputTimepicker from "../form/input/InputTimepicker";
import InputTags from "../form/tag/InputTags";
import Tags from "../form/tag/Tags";
import InputSelect from "../form/input/InputSelect";
import ActionButton from "../form/button/ActionButton";

function SignUpSummary() {
    const collapsibleRef = useRef(null);
    const collapsiblePopupRef = useRef(null);
    const tapTargetRef = useRef(null);
    const modalRef = useRef(null);
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
        // instance.updateData({...});
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

    return (
        <>
            <BasicSection
                theme="light"
                wrappedSection={(
                    <FormTemplate
                        formId="form1"
                        headerText="Summary"
                        formContent={
                            <>
                                <Table
                                    headers={["Name", "Item Name", "Item Price"]}
                                    columns={[
                                        ["Alvin", "Eclair", "$0.87"],
                                        ["Alan", "Jellybean", "$3.76"],
                                        ["Jonathan", "Lollipop", "$7.00"]
                                    ]} />
                                <Pagination
                                    pages={[
                                        { number: 1, ref: "#!", active: true },
                                        { number: 2, ref: "#!", waves: true },
                                        { number: 3, ref: "#!", waves: true },
                                        { number: 4, ref: "#!", waves: true },
                                        { number: 5, ref: "#!", waves: true }
                                    ]}
                                    arrows={
                                        {
                                            left: { ref: "#!", disabled: true, icon: "chevron_left" },
                                            right: { ref: "#!", icon: "chevron_right" }
                                        }
                                    } />
                            </>
                        } />
                )}
            />

            <BasicSection
                large={true}
                wrappedSection={(
                    <FormTemplate
                        formId="form2"
                        formContent={
                            <>
                                <InputTextArea
                                    id="message_sign" label="Your Message" defaultValue={""}
                                    icon="message" validate={{ dataLength: 120 }} />
                                <InputText
                                    id="autocomplete-input" label="Autocomplete" icon="textsms"
                                    validate={{}} autocomplete={{ dataToAutocomplete }} />
                                <InputTimepicker
                                    id="timepicker_sign" label="Select time"
                                    validate={{}} properties={{ showClearBtn: true }} />
                                <InputTags id="tags_basic"
                                    validate={{}}
                                    properties={{ placeholder: 'Enter a tag' }} />
                                <InputTags id="tags_initial"
                                    validate={{}} initial={true}
                                    properties={
                                        {
                                            secondaryPlaceholder: '+Tag',
                                            readOnly: true,
                                            data: [{ tag: 'Apple' }, { tag: 'Microsoft' }, { tag: 'Google' }],
                                        }
                                    } />
                                <Tags validate={{}}
                                    tags={
                                        [
                                            { id: "tag1", image: avatar, label: "Jane Doe" },
                                            { id: "tag2", close: true, label: "Tag" }
                                        ]
                                    } />
                                <InputTags id="tags_autocomplete"
                                    validate={{}} autocomplete={true}
                                    properties={
                                        {
                                            placeholder: 'Enter a autocomplete tag',
                                            autocompleteOptions: {
                                                data: dataToAutocomplete
                                            },
                                            limit: Infinity,
                                            minLength: 1
                                        }
                                    } />
                            </>
                        } />
                )}
            />

            <BasicSection
                theme="light" large={true}
                wrappedSection={(
                    <FormTemplate
                        formId="form3"
                        headerText="Others"
                        formContent={
                            <>
                                <InputText
                                    id="password" label="Password" password={true}
                                    validate={{}} />
                                <InputSelect
                                    id="multiple_select" label="Choose your option" headerText="Multiple Select"
                                    multiple={true} defaultValue={[1, 3]} validate={{}}
                                    properties={{ isMultiple: true }}
                                    options={
                                        [{ value: 1, label: "Option 1" }, { value: 2, label: "Option 2" }, { value: 3, label: "Option 3" }]
                                    } />
                                <InputSelect
                                    id="group_select" validate={{}}
                                    optionGroups={[
                                        { id: "group1", label: "team 1", options: [{ value: 1, label: "Option 1" }, { value: 2, label: "Option 2" }] },
                                        { id: "group2", label: "team 2", options: [{ value: 3, label: "Option 3" }, { value: 4, label: "Option 4" }] }
                                    ]} />
                                <InputSelect
                                    id="image_select1" label="Choose your option" headerText="Images in select"
                                    isDuplicated={true} defaultValue={[0]} validate={{}}
                                    options={[
                                        { value: 1, label: "example 1", icon: getImg(1).src },
                                        { value: 2, label: "example 2", icon: getImg(2).src },
                                        { value: 3, label: "example 3", icon: getImg(2).src }
                                    ]} />
                                <InputSelect
                                    id="image_select2" label="Choose your option" headerText="Images in select"
                                    isDuplicated={true} defaultValue={[0]} validate={{}}
                                    options={[
                                        { value: 1, label: "example 1", icon: getImg(1).src },
                                        { value: 2, label: "example 2", icon: getImg(2).src },
                                        { value: 3, label: "example 3", icon: getImg(2).src }
                                    ]} />
                                <InputSelect
                                    id="image_disabled" label="Disabled option" icon="playlist_add_check"
                                    disabled={true} defaultValue={[0]} validate={{}}
                                    options={
                                        [{ value: 1, label: "Option 1" }, { value: 2, label: "Option 2" }, { value: 3, label: "Option 3" }]
                                    } />

                                <div className="input-field col s12">
                                    <ActionButton
                                        id="reset" label="Reset"
                                        icon="clear_all" color="grey" hasWaves={true}
                                        disabled={false} />
                                    <ActionButton
                                        id="save" label="Save"
                                        icon="send" hasWaves={true}
                                        disabled={false} type="submit" />
                                </div>
                            </>
                        } />
                )}
            />

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
