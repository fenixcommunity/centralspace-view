import React from 'react'

function ActionButton(props) {
  //todo classes -> use another way
  const classes = props.classes ? props.classes : "";
  const reference = props.reference ? props.reference : "#";
  const buttonType = props.type ? props.type : "button";
  const buttonLarge = props.buttonLarge ? "btn-large" : "";
  const buttonFloating = props.buttonFloating ? "btn-floating" : "";
  const wavesEffect = props.hasWaves ? "waves-effect waves-light" : "";

  const actions = props.actions;
  const onClickActionAttr = actions && actions.onClick ? { "onClick": actions.onClick } : {}

  return (
    <button
      id={props.id}
      href={reference}
      className={`btn ${wavesEffect} ${props.color} ${buttonLarge} ${buttonFloating} ${classes}`}
      type={buttonType}
      name={props.label}
      disabled={props.disabled}
      {...onClickActionAttr}
    >
      {props.label}
      <i className="material-icons right">{props.icon}</i>
    </button>
  )
}

export default ActionButton;
