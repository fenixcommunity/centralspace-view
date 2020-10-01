import React from 'react'
import TeamPerson from './TeamPerson';
import { generateKey } from '../../utils/keyGenerator';

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
                        <TeamPerson key={generateKey(people.name)} name={people.name} teamTitle={people.teamTitle} avatar={people.avatar.img} />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default TeamGroup;
