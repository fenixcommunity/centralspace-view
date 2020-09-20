import React from 'react';

function TeamPerson(props) {
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

export default TeamPerson;
