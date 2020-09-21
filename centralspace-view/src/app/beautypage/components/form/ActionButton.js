import React from 'react'

function ActionButton(props) {
  const buttonType = props.type ? props.type : "button";
  const wavesEffect = props.hasWaves ? "waves-effect waves-light" : "";
  return (
    <button
      id={props.id}
      className={`btn ${wavesEffect} ${props.color}`}
      type={buttonType}
      name={props.label}
      disabled={props.disabled}
    >
      {props.label}
      <i className="material-icons right">{props.icon}</i>
    </button>
  )
}

export default ActionButton;
