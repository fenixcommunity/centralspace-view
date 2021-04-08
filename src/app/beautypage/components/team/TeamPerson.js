import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  teamTitle: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired
}

const TeamPerson = ({ name, teamTitle, avatar }) => {
  return (
    <div className="col s12 m4">
      <div className="avatar-wrapper">
        <span className="avatar">
          <img src={avatar} alt="" />
        </span>
      </div>
      <div className="avatar-name">
        <span className="name">{name}</span>
        <span className="title">{teamTitle}</span>
      </div>
    </div>
  )
}

TeamPerson.propTypes = propTypes;

export default TeamPerson;
