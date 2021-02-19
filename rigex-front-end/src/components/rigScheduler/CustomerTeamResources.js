import React from 'react';
import Faker from 'faker';

import './customerTeamResourcesStyle.scss';

const CompanyLogo = Faker.image.business();

const CustomerTeamResources = ({ customerTeamResources }) => {
  const TeamResourcesTable = () => {
    if (customerTeamResources) {
      return (
        <table className="team-resources-table">
          <thead
            data-parent="#bodyContainer"
            data-toggle="table-body"
            data-target="#tbodyCollapse"
            className="table-heading-container"
          >
            <tr className="table-title-row">
              <th className="table-title" colspan="2">
                CUSTOMER TEAM RESOURCES
              </th>
            </tr>
            <tr>
              <th className="table-heading">Team Role</th>
              <th className="table-heading">Commitment</th>
            </tr>
          </thead>
          <tbody className="table-body" id="tbodyCollapse">
            {customerTeamResources.map((resource) => (
              <tr key={resource.teamRole}>
                <td id={resource.teamRole}>{resource.teamRole}</td>
                <td>{resource.commitment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="rig-scheduler-customer-team-resources-grid-container">
      <div className="computer-image">
        <img className="mockup" alt="Rig Scheduler Mockup" src={CompanyLogo} />
      </div>
      <TeamResourcesTable />
    </div>
  );
};

export default CustomerTeamResources;
