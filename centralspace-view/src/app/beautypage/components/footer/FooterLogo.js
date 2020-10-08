import React from 'react'

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

const FooterLogo = ({}) => {
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

FooterLogo.propTypes = propTypes;

export default FooterLogo;
