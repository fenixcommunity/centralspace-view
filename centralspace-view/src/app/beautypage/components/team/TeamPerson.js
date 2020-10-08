import React from 'react';
import PropTypes from 'prop-types';

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

const TeamPerson = ({ }) => {
    return (
        <div className="col s12 m4">
        <div className="avatar-wrapper">
          <span className="avatar">
            <img src={props.avatar} alt="" />
          </span>
        </div>
        <div className="avatar-name">
          <span className="name">{props.name}</span>
          <span className="title">{props.teamTitle}</span>
        </div>
      </div>
    )
}

TeamPerson.propTypes = propTypes;

export default TeamPerson;
