
import React, { useEffect, useRef } from "react";
import '../../../../../resources/beautypage/css/table.css';
import '../../../../../resources/beautypage/css/chips.css';
import '../../../../../resources/beautypage/css/tap-target.css';
import '../../../../../resources/beautypage/css/nouislider.css';
import '../../../../../resources/beautypage/css/range.css';
import '../../../../../resources/beautypage/css/radiobutton-checkbox.css';
import '../../../../../resources/beautypage/css/helper-text-validator.css';
import M from 'materialize-css/dist/js/materialize.js';
import avatar from '../../../../../resources/beautypage/images/people/avatar4.jpg';

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

            <div className="section valign-wrapper">
                <div className="container">
                    <form>
                        <div class="row">

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

                            <div class="input-field col s12">
                                <i class="material-icons prefix">textsms</i>
                                <input type="text" id="autocomplete-input" class="autocomplete" ref={autocompleteRef} />
                                <label for="autocomplete-input">Autocomplete</label>
                            </div>

                            <div class="input-field col s12">
                                <input id="timepicker" type="text" class="timepicker" ref={timepickerRef} />
                                <label for="timepicker">Select time</label>
                            </div>

                            <div className="col s12 basic-top-break">
                                <div class="chips" ref={chipsRef}></div>
                            </div>

                            <div className="col s12 basic-top-break">
                                <div class="chips chips-initial" ref={initialChipsRef}></div>
                            </div>

                            <div className="col s12 basic-top-break">
                                <div class="chip"> <img src={avatar} alt="Contact Person" /> Jane Doe</div>
                                <div class="chip"> Tag <i class="close material-icons">close</i>
                                </div>
                            </div>

                            <div className="col s12 basic-top-break">
                                <div class="chips " ref={placeholderChipsRef}></div>
                            </div>
                            <div className="col s12 basic-top-break">
                                <div class="chips chips-autocomplete" ref={autocompleteChipsRef}></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="section light valign-wrapper">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col s12">
                                <h2 className="section-title">Others</h2>
                            </div>

                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" />
                                <label for="password">Password</label>
                            </div>

                            <div className="input-field col s12">
                                <p>Multiple Select</p>
                                <select multiple ref={optionSelectRef1}>
                                    <option value={0} disabled selected>
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
                                <select className="icons" ref={optionSelectRef4}>
                                    <option value disabled selected>
                                        Choose your option
                                    </option>
                                    <option value data-icon={getImg(1).src}>
                                        example 1
                                    </option>
                                    <option value data-icon={getImg(2).src}>
                                        example 2
                                    </option>
                                    <option value data-icon={getImg(3).src}>
                                        example 3
                                    </option>
                                </select>

                            </div>
                            <div className="input-field col s12 m6">
                                <p>Images in select</p>
                                <select className="icons" ref={optionSelectRef5}>
                                    <option value={0} disabled selected>
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

            <div className="section valign-wrapper">
                <div className="container">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate" />
                                <label htmlFor="email">Email validator</label>
                                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>

                        <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input type="file" />
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" />
                            </div>
                        </div>

                        <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input type="file" multiple />
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="Upload one or more files" />
                            </div>
                        </div>


                    </form>
                </div>
            </div>

            <div className="section white valign-wrapper">
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

                        <div className="col s12 basic-top-break">
                            <div id="range-slider"></div> {/* initialized in init.js */}
                            <form className="basic-top-break" action="#">
                                <p class="range-field">
                                    <input type="range" id="test5" min="0" max="100" />
                                </p>
                            </form>
                        </div>

                        <div className="col s12 basic-top-break">
                            <div class="switch">
                                <label>
                                    Off
                                <input type="checkbox" />
                                    <span class="lever"></span>
                                    On
                                </label>
                            </div>
                            <div class="switch">
                                <label>
                                    Off
                                <input disabled={true} type="checkbox" />
                                    <span class="lever"></span>
                                    On
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SignUpSummary;
