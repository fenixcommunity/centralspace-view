import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

const propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  classes: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconPossition: PropTypes.string,
  color: PropTypes.string,
  reference: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  buttonLarge: PropTypes.bool,
  buttonFloating: PropTypes.bool,
  buttonFlat: PropTypes.bool,
  hasWaves: PropTypes.bool,
  pulseEffect: PropTypes.bool,
  actions: PropTypes.object
}

const ActionButton = ({
  id, value, label, classes, icon, iconColor, iconPossition, color, reference, type, disabled, 
  hidden, buttonLarge, buttonFloating, buttonFlat, hasWaves, pulseEffect, actions
}) => {
  //todo classes -> use another way
  const classesNames = classes ? classes : "";
  const buttonColor = color ? color : "";
  const hreference = reference ? reference : "#";
  const buttonType = type ? type : "button";
  const buttonLargeClass = buttonLarge ? "btn-large" : "";
  const buttonFloatingClass  = buttonFloating ? "btn-floating" : "";
  const buttonFlatClass  = buttonFlat ? "-flat" : "";
  const wavesEffect = hasWaves ? "waves-effect waves-light" : "";
  const pulseEffectClass = pulseEffect ? "pulse" : "";

  const onClickActionAttr = actions && actions.onClick ? { "onClick": actions.onClick } : {}

  return (
    !hidden ? (
    <button
      id={id}
      value={value}
      href={hreference}
      className={`btn${buttonFlatClass} ${wavesEffect} ${pulseEffectClass} ${buttonColor} ${buttonLargeClass} ${buttonFloatingClass} ${classesNames}`}
      type={buttonType}
      name={label}
      disabled={disabled}
      {...onClickActionAttr}
    >
      {label}
      {icon && <Icon icon={icon} iconColor={iconColor} possition={iconPossition} />}
    </button>
    ) : null
  )
}

ActionButton.propTypes = propTypes;

export default ActionButton;
