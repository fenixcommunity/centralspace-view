import React from 'react'
import TeamPerson from './TeamPerson';

function TeamGroup(props) {
    const peoples = props.peoples;
    return (
        <div className="row">
            <div className="col s12 l3 center-on-small-only">
                <h3 className="section-title">{props.groupName}</h3>
            </div>
            <div className="col s12 l9">
                <div className="row">
                    {peoples && peoples.map(people => (
                        <TeamPerson name={people.name} teamTitle={people.teamTitle} avatar={people.avatar.img} />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default TeamGroup;
