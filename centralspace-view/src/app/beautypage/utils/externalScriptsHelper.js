
import $ from 'jquery';

export const checkFormTargetIsValid = (target) => {
    return  $(target).find('.invalid').length === 0;
}

export const checkFormRefIsValid = (formRef) => {
    return formRef && $(formRef.current).find('.invalid').length === 0;
}