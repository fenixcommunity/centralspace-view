import React from 'react';
import TeamGroup from "./TeamGroup";
import avatar1 from '../../../../resources/beautypage/images/people/avatar1.jpg';
import avatar2 from '../../../../resources/beautypage/images/people/avatar2.jpg';
import avatar3 from '../../../../resources/beautypage/images/people/avatar3.jpg';

const propTypes = {}

const TeamSection = ({ }) => {
    return (
        <div className="section white full-height">
        <div className="row valign">
          <div className="col s12 m10 offset-m1 team">
            <div className="row">
              <TeamGroup
                groupName="Marketing"
                peoples={
                  [
                    { name: "Jane Doe", teamTitle: "Founder", avatar: { img: avatar1 } },
                    { name: "John Chang", teamTitle: "Head of Sales", avatar: { img: avatar2 } },
                    { name: "Charlotte Smith", teamTitle: "Lead Sales", avatar: { img: avatar3 } }
                  ]
                }
              />
              <TeamGroup
                groupName="Engineering"
                peoples={
                  [
                    { name: "Jane Doe", teamTitle: "Frontend Engineer", avatar: { img: avatar1 } },
                    { name: "John Chang", teamTitle: "Backend Engineer", avatar: { img: avatar2 } },
                    { name: "Charlotte Smith", teamTitle: "Database Engineer", avatar: { img: avatar3 } }
                  ]
                } />
              <TeamGroup
                groupName="Design"
                peoples={
                  [
                    { name: "Jane Doe", teamTitle: "Motion Designer", avatar: { img: avatar1 } },
                    { name: "John Chang", teamTitle: "Interaction Designer", avatar: { img: avatar2 } },
                    { name: "Charlotte Smith", teamTitle: "Senior Designer", avatar: { img: avatar3 } }
                  ]
                } />
            </div>
          </div>
        </div>
      </div>
    )
}

TeamSection.propTypes = propTypes;

export default TeamSection;
