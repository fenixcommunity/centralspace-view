import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

const propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  classes: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconPossition: PropTypes.string,
  color: PropTypes.string,
  reference: PropTypes.string,
  type: PropTypes.string,
  classes: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  buttonLarge: PropTypes.bool,
  buttonFloating: PropTypes.bool,
  buttonFlat: PropTypes.bool,
  hasWaves: PropTypes.bool,
  pulseEffect: PropTypes.bool,
  actions: PropTypes.object.isRequired
}

const ActionButton = ({
  id, label, classes, icon, iconColor, iconPossition, color, reference, type, classes, disabled, buttonLarge, buttonFloating, buttonFlat, hasWaves, pulseEffect, actions
}) => {
  //todo classes -> use another way
  const classes = classes ? classes : "";
  const buttonColor = color ? color : "";
  const reference = reference ? reference : "#";
  const buttonType = type ? type : "button";
  const buttonLarge = buttonLarge ? "btn-large" : "";
  const buttonFloating = buttonFloating ? "btn-floating" : "";
  const buttonFlat = buttonFlat ? "-flat" : "";
  const wavesEffect = hasWaves ? "waves-effect waves-light" : "";
  const pulseEffect = pulseEffect ? "pulse" : "";

  const actions = actions;
  const onClickActionAttr = actions && actions.onClick ? { "onClick": actions.onClick } : {}

  return (
    <button
      id={id}
      href={reference}
      className={`btn${buttonFlat} ${wavesEffect} ${pulseEffect} ${buttonColor} ${buttonLarge} ${buttonFloating} ${classes}`}
      type={buttonType}
      name={label}
      disabled={disabled}
      {...onClickActionAttr}
    >
      {label}
      {icon && <Icon icon={icon} iconColor={iconColor} possition={iconPossition} />}
    </button>
  )
}

ActionButton.propTypes = propTypes;

export default ActionButton;
