import React from 'react'

function FooterLogo(props) {
    return (
        <div className="col s6 m3">
        <img
          className="materialize-logo"
          src={props.logoImg}
          alt="description"
        />
        <p>{props.logoDescription}</p>
      </div>
    )
}

export default FooterLogo;
