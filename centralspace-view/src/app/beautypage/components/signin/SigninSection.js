import React from "react";
import PropTypes from 'prop-types';
import BasicSection from "../helper/section/BasicSection";
import FormCard from "../helper/form/FormCard";
import InputText from "../helper/form/input/InputText";
import ActionButton from "../helper/form/button/ActionButton";
import Step from "../stepper/Step";
import StepperLinear from "../stepper/StepperLinear";

const propTypes = {
    history: PropTypes.object.isRequired,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationAttemptFailed: PropTypes.bool,
    handleSignInAction: PropTypes.func.isRequired
}

const SigninSection = ({ history, authenticatedInCentralspace, authenticationAttemptFailed, handleSignInAction }) => {
    const onReturn = () => {
        const mstepper = document.mstepper;
        if (mstepper) {
            mstepper.resetStepper();
        }
    }
    const confirmationMessage = authenticatedInCentralspace ? "Success, feel invited and enjoy."
        : (authenticationAttemptFailed ? "Not authorized, please try with other credentials"
            : "Please log in to Centralspace");
    // Remember me on this computer
    // <p><input type="checkbox" name="remember-me"> Remember me on this computer.</p>
    // <input name="_csrf" type="hidden" value="1cc69667-05e5-497c-b1d8-e44d45adfda4">
    //         <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

    return (
        <BasicSection
            theme="white" large={true}
            wrappedSection={
                <>
                    <FormCard header="Sign up" theme="light" themeColor="blue" onSubmit={(event) => handleSignInAction(event, history)}
                        content={
                            <StepperLinear steps={[
                                <Step id="step_1" key="step_1" active={true} header="Basic data" headerWaves={true}
                                    content={
                                        <>
                                            <InputText
                                                id="username" label="Your username"
                                                validate={{ minLength: 2, maxLength: 10, dataLength: 10 }}
                                                required={true}
                                                autocomplete={false}
                                            />
                                            <InputText
                                                id="password" label="Your password" type="password"
                                                validate={{}}
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
                                <Step id="step_2" key="step_2" header="Confirmation" headerWaves={true}
                                    content={confirmationMessage}
                                    stepActions={
                                        [
                                            <ActionButton
                                                id="login_step_2" key="login_step_2" type="submit" label="Log in"
                                                color="blue" hasWaves={true}
                                            /* data-feedback="someFunction">Log in</button> */
                                            // actions={{ onClick: () => "" }}
                                            />,
                                            <ActionButton
                                                id="login_step_2_return" key="login_step_2_return" label="Return"
                                                color="grey" hasWaves={true}
                                                actions={{ onClick: onReturn }}
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

export default SigninSection;
