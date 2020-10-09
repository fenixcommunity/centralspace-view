
import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
//todo css where?
import '../../../../resources/beautypage/css/nouislider.css';
import avatar1 from '../../../../resources/beautypage/images/people/avatar1.jpg';
import avatar2 from '../../../../resources/beautypage/images/people/avatar2.jpg';
import avatar4 from '../../../../resources/beautypage/images/people/avatar4.jpg';
import BasicSection from "../helper/section/BasicSection";
import FormTemplate from "../helper/form/FormTemplate";
import FormCard from "../helper/form/FormCard";
import Table from "../helper/form/table/Table";
import Pagination from "../helper/form/table/Pagination";
import InputTextArea from "../helper/form/input/InputTextArea";
import InputText from "../helper/form/input/InputText";
import InputTimepicker from "../helper/form/input/InputTimepicker";
import InputTags from "../helper/form/tag/InputTags";
import DisplayTags from "../helper/form/tag/DisplayTags";
import InputSelect from "../helper/form/input/InputSelect";
import ActionButton from "../helper/form/button/ActionButton";
import InputFile from "../helper/form/input/InputFile";
import TapTargetButton from "../taptarget/TapTargetButton";
import TapTargetModal from "../taptarget/TapTargetModal";
import Comment from "../blog/Comment";
import Modal from "../modal/Modal";
import Collapsible from "../collapsible/Collapsible";
import RangeSlider from "../rangeslider/RangeSlider";
import RangePointer from "../rangeslider/RangePointer";
import InputSwitch from "../helper/form/input/InputSwitch";
import Step from "../stepper/Step";
import StepperLinear from "../stepper/StepperLinear";

const propTypes = {}

const SignUpSummary = () => {
    const tapTargetRef = useRef(null);

    const selectImages = [
        { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', title: 'foo', description: 'bar' },
        { id: 2, src: 'https://websetnet.net/wp-content/uploads/2018/09/unnamed-file-530.jpg', title: 'foo', description: 'bar' },
        { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', title: 'foo', description: 'bar' },
    ];

    const getImg = (id) => {
        return selectImages.find(img => img.id === id);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit")
    }

    const handleOnClickTapTargetAction = () => {
        let tap = M.TapTarget.getInstance(tapTargetRef.current);
        if (!tap) {
            tap = M.TapTarget.init(tapTargetRef.current);
        }

        if (tap.isOpen) {
            tap.close();
        }
        else {
            tap.open();
        }
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
                                        { id: 1, elements: ["Alvin", "Eclair", "$0.87"] },
                                        { id: 2, elements: ["Alan", "Jellybean", "$3.76"] },
                                        { id: 3, elements: ["Jonathan", "Lollipop", "$7.00"] }
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
                                    icon="message" validate={{ dataLength: 120, errorMessage: "Text is to long" }} />
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
                                <DisplayTags validate={{}}
                                    tags={
                                        [
                                            { id: "tag1", image: avatar4, label: "Jane Doe" },
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
                                    id="password" label="Password" type="password"
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
                                    isDuplicated={true} defaultValue={0} validate={{}}
                                    options={[
                                        { value: 1, label: "example 1", icon: getImg(1).src },
                                        { value: 2, label: "example 2", icon: getImg(2).src },
                                        { value: 3, label: "example 3", icon: getImg(2).src }
                                    ]} />
                                <InputSelect
                                    id="image_select2" label="Choose your option" headerText="Images in select"
                                    isDuplicated={true} defaultValue={0} validate={{}}
                                    options={[
                                        { value: 1, label: "example 1", icon: getImg(1).src },
                                        { value: 2, label: "example 2", icon: getImg(2).src },
                                        { value: 3, label: "example 3", icon: getImg(2).src }
                                    ]} />
                                <InputSelect
                                    id="image_disabled" label="Disabled option" icon="playlist_add_check"
                                    disabled={true} defaultValue={0} validate={{}}
                                    options={
                                        [{ value: 1, label: "Option 1" }, { value: 2, label: "Option 2" }, { value: 3, label: "Option 3" }]
                                    } />

                                <div className="input-field col s12">
                                    <ActionButton
                                        id="reset_summary" label="Reset"
                                        icon="clear_all" iconPossition="right" color="grey"
                                        hasWaves={true} disabled={false} />
                                    <ActionButton
                                        id="save_summary" label="Save" type="submit"
                                        icon="send" iconPossition="right"
                                        hasWaves={true} />
                                </div>
                            </>
                        } />
                )}
            />

            <BasicSection
                wrappedSection={(
                    <FormTemplate
                        formId="form4"
                        formContent={
                            <>
                                <InputText
                                    id="email" type="email" label="Email validator"
                                    validate={{ successMessage: "Right email", errorMessage: "Wrong email" }} />
                                <InputFile label="File" multiple={false} />
                                <InputFile multiple={true} label="Attachments" placeholder="Upload one or more files" />
                            </>
                        } />
                )}
            />

            <BasicSection
                theme="white"
                wrappedSection={(
                    <FormTemplate
                        formId="form5"
                        formContent={
                            <>
                                <ActionButton
                                    id="tap_button" label="Open tap target"
                                    color="teal lighten-2" hasWaves={true}
                                    actions={{ onClick: handleOnClickTapTargetAction }} />
                                <TapTargetButton isActive={true} actionButton={
                                    <ActionButton
                                        id="menu" icon="menu"
                                        color="cyan" buttonLarge={true} buttonFloating={true}
                                        actions={{ onClick: handleOnClickTapTargetAction }} />
                                } />

                                <TapTargetModal
                                    tapTargetRef={tapTargetRef}
                                    modalTheme="cyan"
                                    content={
                                        <>
                                            <h5>I am here</h5>
                                            <p className="white-text">
                                                Provide value and encourage return visits by introducing users to new features and functionality at contextually
                                                relevant moments.
                                            </p>
                                        </>
                                    } />

                                <div className="basic-top-break ">
                                    <ActionButton
                                        id="modal_trigger" label="Bottom Modal"
                                        reference="#modal"
                                        classes="modal-trigger"
                                        color="grey" hasWaves={true}
                                    />
                                    <Modal
                                        modalBottom={true}
                                        title="Modal Header"
                                        content={
                                            <ul className="collection">
                                                <Comment
                                                    authorAvatar={avatar1}
                                                    title="Title"
                                                    content={
                                                        <p className="grey-text">
                                                            First Line <br /> Second Line
                                                        </p>
                                                    }
                                                    rightIcon={{ icon: "grade", ref: "/", color: "primary-color-text" }} />
                                                <Comment
                                                    authorAvatar={avatar2}
                                                    title="Title"
                                                    content={
                                                        <p className="grey-text">
                                                            First Line <br /> Second Line
                                                        </p>
                                                    }
                                                    rightIcon={{ icon: "grade", ref: "/", color: "primary-color-text" }} />
                                            </ul>
                                        }
                                        modalActions={
                                            [<ActionButton
                                                id="modal_close" key="modal_close" label="Agree"
                                                //todo classes -> use another way
                                                classes="modal-close"
                                                color="teal lighten-2" hasWaves={true}
                                                actions={{}} />
                                            ]
                                        } />
                                </div>

                                <div className="col s12 basic-top-break">
                                    <Collapsible items={[
                                        {
                                            id: 1, headerIcon: "filter_drama", headerMessage: "First",
                                            content: (<span>Lorem ipsum dolor sit amet.</span>)
                                        },
                                        {
                                            id: 2, headerIcon: "place", headerMessage: "Second",
                                            content: (<span>Lorem ipsum dolor sit amet.</span>)
                                        },
                                        {
                                            id: 3, headerIcon: "whatshot", headerMessage: "Third",
                                            content: (<span>Lorem ipsum dolor sit amet.</span>)
                                        }
                                    ]} />
                                    <Collapsible pulledOut={true} items={[
                                        {
                                            id: 1, headerIcon: "filter_drama", headerMessage: "First",
                                            content: (<span>Lorem ipsum dolor sit amet.</span>)
                                        },
                                        {
                                            id: 2, headerIcon: "place", headerMessage: "Second",
                                            content: (<span>Lorem ipsum dolor sit amet.</span>)
                                        },
                                        {
                                            id: 3, headerIcon: "whatshot", headerMessage: "Third",
                                            content: (<span>Lorem ipsum dolor sit amet.</span>)
                                        }
                                    ]} />
                                </div>

                                <div className="col s12 basic-top-break">
                                    <RangeSlider />
                                    <div className="basic-top-break">
                                        <RangePointer id="range_pointer" min="0" max="100" />
                                    </div>
                                </div>

                                <div className="col s12 basic-top-break">
                                    <InputSwitch checked={true} labelUnchecked="Off" labelChecked="On" />
                                    <InputSwitch labelUnchecked="Disabled" labelChecked="Enabled" disabled={true} />
                                </div>
                            </>
                        } />
                )}
            />

            <BasicSection
                theme="white" large={true}
                wrappedSection={
                    <>
                        <FormCard header="Sign up" theme="light" themeColor="blue" onSubmit={handleFormSubmit}
                            content={
                                <StepperLinear steps={[
                                    <Step id="step_1" key="step_1" active={true} header="Basic data" headerWaves={true}
                                        content={
                                            <>
                                                <InputText
                                                    id="login_first_name" label="Your login"
                                                    icon="message" iconColor="blue-text"
                                                    validate={{ minLength: 2, maxLength: 10, dataLength: 10 }}
                                                    required={true}
                                                    autocomplete={false}
                                                />
                                                <InputText
                                                    id="login_email" type="email" label="Your e-mail"
                                                    validate={{ successMessage: "Right email", errorMessage: "Wrong email" }}
                                                    required={true}
                                                    autocomplete={false}
                                                />
                                            </>
                                        }
                                        stepActions={
                                            [
                                                <ActionButton
                                                    id="continue_step_1" key="continue_step_1" label="Continue"
                                                    classes="next-step"
                                                    color="blue" hasWaves={true}
                                                    actions={{ onClick: () => "" }} />
                                            ]
                                        } />,
                                    <Step id="step_2" key="step_2" header="Password" headerWaves={true}
                                        content={
                                            <>
                                                <InputText
                                                    id="login_password" label="Your password" type="password"
                                                    validate={{}}
                                                    required={true}
                                                    autocomplete={false}
                                                />
                                                <InputText
                                                    id="login_password_repeat" label="Repeat password" type="password"
                                                    validate={{}}
                                                    required={true}
                                                    autocomplete={false}
                                                />
                                            </>
                                        }
                                        stepActions={
                                            [
                                                <ActionButton
                                                    id="continue_step_2" key="continue_step_2" label="Continue"
                                                    classes="next-step"
                                                    color="blue" hasWaves={true}
                                                    actions={{ onClick: () => "" }} />,
                                                <ActionButton
                                                    id="back_step_2" key="back_step_2" label="Back"
                                                    classes="previous-step" buttonFlat={true}
                                                    hasWaves={true}
                                                    actions={{ onClick: () => "" }} />
                                            ]
                                        } />,
                                    <Step id="step_3" key="step_3" header="Summary" headerWaves={true}
                                        content="We've just sent you an activation email"
                                        stepActions={
                                            [
                                                <ActionButton
                                                    id="login_step_3" key="login_step_3" type="submit" label="Log in"
                                                    color="blue" hasWaves={true}
                                                    /* data-feedback="someFunction">Log in</button> */
                                                    actions={{ onClick: () => "" }} />
                                            ]
                                        } />
                                ]} />
                            }
                            footerActions={[
                                <ActionButton
                                    id="controlled_reset" key="controlled_reset" label="Clear form data"
                                    color="grey" hasWaves={true}
                                    actions={{}} />
                            ]} />
                    </>
                }
            />
        </>
    );
}

SignUpSummary.propTypes = propTypes;

export default SignUpSummary;
