import React from 'react'
import TeamPerson from './TeamPerson';
import { generateKey } from '../../utils/keyGenerator';

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

const TeamGroup = ({ }) => {
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

TeamGroup.propTypes = propTypes;

export default TeamGroup;
