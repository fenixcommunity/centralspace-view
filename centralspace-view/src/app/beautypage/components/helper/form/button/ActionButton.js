import React from 'react'
import Icon from '../../Icon';

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const ActionButton = ({}) => {
  //todo classes -> use another way
  const classes = props.classes ? props.classes : "";
  const buttonColor = props.color ? props.color : "";
  const reference = props.reference ? props.reference : "#";
  const buttonType = props.type ? props.type : "button";
  const buttonLarge = props.buttonLarge ? "btn-large" : "";
  const buttonFloating = props.buttonFloating ? "btn-floating" : "";
  const buttonFlat = props.buttonFlat ? "-flat" : "";
  const wavesEffect = props.hasWaves ? "waves-effect waves-light" : "";
  const pulseEffect = props.pulseEffect ? "pulse" : "";

  const actions = props.actions;
  const onClickActionAttr = actions && actions.onClick ? { "onClick": actions.onClick } : {}

  return (
    <button
      id={props.id}
      href={reference}
      className={`btn${buttonFlat} ${wavesEffect} ${pulseEffect} ${buttonColor} ${buttonLarge} ${buttonFloating} ${classes}`}
      type={buttonType}
      name={props.label}
      disabled={props.disabled}
      {...onClickActionAttr}
    >
      {props.label}
      {props.icon && <Icon icon={props.icon} iconColor={props.iconColor} possition={props.iconPossition}/>}
    </button>
  )
}

ActionButton.propTypes = propTypes;

export default ActionButton;
