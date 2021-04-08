import React from 'react';
import PropTypes from 'prop-types';
import TeamPerson from './TeamPerson';
import { generateKey } from '../../utils/keyGenerator';

const propTypes = {
    groupName: PropTypes.string.isRequired,
    peoples: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            teamTitle: PropTypes.string.isRequired,
            avatar: PropTypes.object.isRequired,
        })
    ).isRequired
}

const TeamGroup = ({ groupName, peoples }) => {
    return (
        <div className="row">
            <div className="col s12 l3 center-on-small-only">
                <h3 className="section-title">{groupName}</h3>
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

TeamGroup.propTypes = propTypes;

export default TeamGroup;
