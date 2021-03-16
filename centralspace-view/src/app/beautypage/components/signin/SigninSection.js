import React from "react";
import PropTypes from 'prop-types';
import { setTextColor, replaceBlank } from "../../../beautypage/utils/styleUtils"
import { LOG_IN_METHOD } from "../../../config/appConfig"
import BasicSection from "../helper/section/BasicSection";
import FormCard from "../helper/form/FormCard";
import InputText from "../helper/form/input/InputText";
import ActionButton from "../helper/form/button/ActionButton";
import Step from "../stepper/Step";
import StepperLinear from "../stepper/StepperLinear";
import StyleWrapper from "../../../hoc/StyleWrapper";
import Loader from "../utils/Loader"

const propTypes = {
    history: PropTypes.object.isRequired,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationAttemptFailed: PropTypes.bool,
    setAuthenticationAttemptFailed: PropTypes.func.isRequired,
    clearAuthError: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    setSignInMethod: PropTypes.func.isRequired,
    signInMethod: PropTypes.symbol,
    firebaseAuthError: PropTypes.string,
    mainTheme: PropTypes.string.isRequired,
    loaderLoaded: PropTypes.bool
}

const SigninSection = ({
    history,
    authenticatedInCentralspace,
    authenticationAttemptFailed,
    setAuthenticationAttemptFailed,
    clearAuthError,
    signIn,
    setSignInMethod,
    signInMethod,
    firebaseAuthError,
    mainTheme,
    loaderLoaded
}) => {
    const mstepper = document.mstepper;
    const clearAuthenticationAttemptInfo = () => {
        setAuthenticationAttemptFailed(false);
        clearAuthError();
    }
    const returnActionIfWrongCredentials = () => {
        resetStepper();
        clearAuthenticationAttemptInfo()
    }
    const setCentralspaceSignInMethod = () => {
        setSignInMethod(LOG_IN_METHOD.CENTRALSPACE);
        nextStep();
    };
    const setFirebaseSignInMethod = () => {
        setSignInMethod(LOG_IN_METHOD.FIREBASE);
        nextStep();
    };
    const nextStep = () => {
        if (mstepper) {
            mstepper.nextStep()
        }
    }
    const resetStepper = () => {
        if (mstepper) {
            const step2Index = 1;
            mstepper.resetStepper(step2Index);
        }
    }

    const step1HeaderText = !signInMethod ? "Login method" :
        (signInMethod === LOG_IN_METHOD.FIREBASE ? "Login to Firebase" : "Login to Centralspace");
    const authenticationAttemptFailedMessage = authenticationAttemptFailed ?
        (firebaseAuthError ? firebaseAuthError : "Not authorized, please try with other credentials")
        : "Please sign in"
    const confirmationMessage = authenticatedInCentralspace ? "Success, feel invited and enjoy."
        : authenticationAttemptFailedMessage;
    const finalStepContent = loaderLoaded ? <Loader /> : confirmationMessage;
   
    const textColor = setTextColor(mainTheme);
    const stepColor = replaceBlank(mainTheme, "-") + "-step";
    // handleInputChange = (e) => {
    //     xxx({ [e.target.id]: e.target.value })
    // }

    // Remember me on this computer
    // <p><input type="checkbox" name="remember-me"> Remember me on this computer.</p>
    // <input name="_csrf" type="hidden" value="1cc69667-05e5-497c-b1d8-e44d45adfda4">
    //         <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

    return (
        <BasicSection
            theme="white" large={true}
            wrappedSection={
                <>
                    <FormCard header="Sign in" theme="light" themeColor={textColor} onSubmit={(event) => signIn(event, history)}
                        content={
                            <StepperLinear customClass={stepColor}
                                steps={[
                                    <Step id="step_1" key="step_1" active={true} header={step1HeaderText} headerWaves={true}
                                        content="Please choose the login method"
                                        stepActions={
                                            [
                                                <ActionButton
                                                    id="login_step_1" value="centralspace" key="login_step_1"
                                                    classes="next-step"
                                                    label="By Centralspace" color="blue" hasWaves={true}
                                                    actions={{ onClick: setCentralspaceSignInMethod }}
                                                    hidden={authenticationAttemptFailed}
                                                />,
                                                <ActionButton
                                                    id="login_step_1_firebase" value="firebase" key="login_step_1_firebase"
                                                    classes="next-step"
                                                    label="By Firebase" color="teal lighten-2" hasWaves={true}
                                                    actions={{ onClick: setFirebaseSignInMethod }}
                                                    hidden={authenticationAttemptFailed}

                                                />
                                            ]
                                        } />,
                                    <Step id="step_2" key="step_2" header="Credentials" headerWaves={true}
                                        disableNextStep={signInMethod === null}
                                        content={
                                            <>
                                                <InputText
                                                    id="username" label="Your username"
                                                    icon="message" iconColor={textColor}
                                                    validate={{ minLength: 3, maxLength: 20, dataLength: 20 }}
                                                    required={true}
                                                    autocomplete={false} // never for username!
                                                />
                                                <InputText
                                                    id="password" label="Your password" type="password"
                                                    icon="password" iconColor={textColor}
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
                                                    color={mainTheme} hasWaves={true}
                                                    actions={{ onClick: clearAuthenticationAttemptInfo }}
                                                />
                                            ]
                                        }
                                        onClickNextStep={clearAuthenticationAttemptInfo}
                                    />,
                                    <Step id="step_3" key="step_3" header="Confirmation" headerWaves={true}
                                        content={finalStepContent}
                                        stepActions={
                                            [
                                                <ActionButton
                                                    id="login_step_3" key="login_step_3" type="submit"
                                                    label="Log in" color={mainTheme} hasWaves={true}
                                                    actions={{}}
                                                    hidden={authenticationAttemptFailed}
                                                /* data-feedback="someFunction">Log in</button> */
                                                // actions={{ onClick: () => "" }}
                                                />,
                                                <ActionButton
                                                    id="login_step_3_return" key="login_step_3_return" label="Return"
                                                    color="grey" hasWaves={true}
                                                    actions={{ onClick: returnActionIfWrongCredentials }}
                                                    hidden={!authenticationAttemptFailed}
                                                />
                                            ]
                                        } />
                                ]} />
                        }
                        footerActions={[
                            <ActionButton
                                id="controlled_reset" key="controlled_reset" label="Clear form data"
                                color="grey" hasWaves={true}
                                actions={{}}
                                hidden={true} />
                        ]} />
                </>
            }
        />
    );
}

SigninSection.propTypes = propTypes;

export default StyleWrapper(SigninSection);
