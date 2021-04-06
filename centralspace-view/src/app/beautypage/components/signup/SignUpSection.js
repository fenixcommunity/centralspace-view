import PropTypes from 'prop-types';
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import { AUTH_METHOD } from "../../config/appConfig";
import { checkPassword } from "../../actions/signUpActions";
import StyleWrapper from "../../hoc/StyleWrapper";
import { checkFormRefIsValid } from "../../utils/externalScriptsHelper";
import { replaceBlank, setTextColor } from "../../utils/styleUtils";
import ActionButton from "../helper/form/button/ActionButton";
import FormCard from "../helper/form/FormCard";
import InputText from "../helper/form/input/InputText";
import BasicSection from "../helper/section/BasicSection";
import Step from "../stepper/Step";
import StepperLinear from "../stepper/StepperLinear";
import Loader from "../utils/Loader";

const propTypes = {
    history: PropTypes.object.isRequired,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    registrationAttemptFailed: PropTypes.bool,
    setRegistrationAttemptFailed: PropTypes.func.isRequired,
    clearAuthError: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    setSignUpMethod: PropTypes.func.isRequired,
    signUpMethod: PropTypes.symbol,
    firebaseAuthError: PropTypes.string,
    mainTheme: PropTypes.string.isRequired,
    loaderLoaded: PropTypes.bool,
    password: PropTypes.string,
    passwordRepeated: PropTypes.string,
    setPassword: PropTypes.func,
    signUpFormNotValid: PropTypes.bool,
    setSignUpFormNotValid: PropTypes.func
}

const SignUpSection = ({
    history,
    authenticatedInCentralspace,
    registrationAttemptFailed,
    setRegistrationAttemptFailed,
    clearAuthError,
    signUp,
    setSignUpMethod,
    signUpMethod,
    firebaseAuthError,
    mainTheme,
    loaderLoaded,
    setPassword,
    password,
    passwordRepeated,
    signUpFormNotValid,
    setSignUpFormNotValid
}) => {
    const mstepper = document.mstepper;
    const formRef = useRef(null);
    const location = useLocation();

    const { register, handleSubmit, getValues, watch, errors, clearErrors, setError } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {},
        resolver: undefined,
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: true,
    });

    useEffect(() => {
        checkFormIsValid();
    }, [errors.password, errors.passwordRepeated]);


    const checkFormIsValid = () => {
        setSignUpFormNotValid(!checkFormRefIsValid(formRef));
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handlePasswordRepeatedChange = (e) => {
        setPassword(e.target.value, true);
    }
    const clearAuthenticationAttemptInfo = () => {
        setRegistrationAttemptFailed(false);
        clearAuthError();
    }
    const returnActionIfWrongCredentials = () => {
        resetStepper();
        clearAuthenticationAttemptInfo()
    }
    const setCentralspaceSignUpMethod = () => {
        setSignUpMethod(AUTH_METHOD.CENTRALSPACE);
        nextStep();
    };
    const setFirebaseSignUpMethod = () => {
        setSignUpMethod(AUTH_METHOD.FIREBASE);
        nextStep();
    };
    const nextStep = () => {
        if (mstepper) mstepper.nextStep()
    }
    const resetStepper = () => {
        const step2Index = 1;
        mstepper.resetStepper(step2Index);
    }

    const step1HeaderText = !signUpMethod ? "Registration method" :
        (signUpMethod === AUTH_METHOD.FIREBASE ? "Registration to Firebase" : "Registration to Centralspace");
    const authenticationAttemptFailedMessage = registrationAttemptFailed ?
        (firebaseAuthError ? firebaseAuthError : "Registration failed, please try again later ")
        : "Please sign up";
    const confirmationMessage = authenticatedInCentralspace ? "Success, feel invited and enjoy."
        : authenticationAttemptFailedMessage;
    const finalStepContent = loaderLoaded ? <Loader /> : confirmationMessage;

    const textColor = setTextColor(mainTheme);
    const stepColor = replaceBlank(mainTheme, "-") + "-step";

    const passwordError = "The passwords are not identical";
    const validatePasswordRepeated = (passwordRepeated) => {
        // const isChecked = watch("passwordRepeated"); // watch if the name is checked
        const isCorrect = checkPassword(getValues("password"), passwordRepeated);
        if (!isCorrect) {
            return passwordError;
        }
        clearErrors("password");
    };
    const validatePassword = (password) => {
        const isCorrect = checkPassword(password, getValues("passwordRepeated"));
        if (!isCorrect) {
            setError("passwordRepeated", {
                message: passwordError
            });
            return true;
        }
        clearErrors("passwordRepeated");
    };

    const formRegisterReference = (e) => {
        register(e);
        formRef.current = e;
    };
    const formRegister = {
        register,
        errors
    }

    return (
        <BasicSection
            theme="white" large={true}
            wrappedSection={
                <>
                    <FormCard reference={formRegisterReference}
                        formRegister={register}
                        errors={errors}
                        header="Sign Up" theme="light" themeColor={textColor}
                        onSubmit={handleSubmit((forms, event) => signUp(forms, event, history, location), (errors) => console.log(errors))}
                        onBlur={checkFormIsValid}
                        content={
                            <StepperLinear customClass={stepColor}
                                steps={[
                                    <Step id="step_1" key="step_1" active={true} header={step1HeaderText} headerWaves={true}
                                        content="Please choose the registration method"
                                        stepActions={
                                            [
                                                <ActionButton
                                                    id="register_step_1" value="centralspace" key="register_step_1"
                                                    classes="next-step"
                                                    label="By Centralspace" color="blue" hasWaves={true}
                                                    actions={{ onClick: setCentralspaceSignUpMethod }}
                                                />,
                                                <ActionButton
                                                    id="register_step_1_firebase" value="firebase" key="register_step_1_firebase"
                                                    classes="next-step"
                                                    label="By Firebase" color="teal lighten-2" hasWaves={true}
                                                    actions={{ onClick: setFirebaseSignUpMethod }}
                                                />
                                            ]
                                        } />,
                                    <Step id="step_2" key="step_2" header="New account data" headerWaves={true}
                                        disableNextStep={signUpMethod === null}
                                        content={
                                            <>
                                                <InputText
                                                    id="firstName" label="Your first name"
                                                    icon="person" iconColor={textColor}
                                                    validate={{ minLength: 3, maxLength: 20, dataLength: 20 }}
                                                    required={true}
                                                    autocomplete={false}
                                                    register={register}
                                                    errors={errors}
                                                />
                                                <InputText
                                                    id="lastName" label="Your last name"
                                                    icon="people_outline" iconColor={textColor}
                                                    validate={{ minLength: 3, maxLength: 20, dataLength: 20 }}
                                                    autocomplete={false}
                                                />
                                                <InputText
                                                    id="email" type="email" label="Your mail"
                                                    validate={{ successMessage: "Right email", errorMessage: "Wrong email" }}
                                                    icon="mail" iconColor={textColor}
                                                    required={true}
                                                    autocomplete={false}
                                                />
                                                <InputText
                                                    id="password" label="Your password" type="password" value={password}
                                                    icon="password" iconColor={textColor}
                                                    validate={{}}
                                                    onChange={handlePasswordChange}
                                                    formRegister={{ ...formRegister, validate: validatePassword }}
                                                    required={true}
                                                    autocomplete={false}
                                                />
                                                <InputText
                                                    id="passwordRepeated" label="Repeat Your password" type="password" value={passwordRepeated}
                                                    icon="repeat" iconColor={textColor}
                                                    validate={{}}
                                                    onChange={handlePasswordRepeatedChange}
                                                    formRegister={{ ...formRegister, validate: validatePasswordRepeated }}
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
                                                    disabled={signUpFormNotValid}
                                                />
                                            ]
                                        }
                                        onClickNextStep={clearAuthenticationAttemptInfo}
                                    />,
                                    <Step id="step_3" key="step_3" header="Confirmation" headerWaves={true}
                                        disableNextStep={signUpFormNotValid}
                                        content={finalStepContent}
                                        stepActions={
                                            [
                                                <ActionButton
                                                    id="register_step_3" key="register_step_3" type="submit"
                                                    label="Register" color={mainTheme} hasWaves={true}
                                                    actions={{}}
                                                    hidden={registrationAttemptFailed}
                                                />,
                                                <ActionButton
                                                    id="register_step_3_return" key="register_step_3_return" label="Return"
                                                    color="grey" hasWaves={true}
                                                    actions={{ onClick: returnActionIfWrongCredentials }}
                                                    hidden={!registrationAttemptFailed}
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

SignUpSection.propTypes = propTypes;

export default StyleWrapper(SignUpSection);
