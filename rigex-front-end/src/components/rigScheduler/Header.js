import React from 'react';
import Faker from 'faker';

import './headerStyle.scss';

const CompanyLogo = Faker.image.business();

const SchedulerHeader = () => {
  return (
    <div className="grid-container">
      <div className="company-logo">
        <div class="logo-container">
          <img
            className="company-logo-image"
            alt="company logo"
            src={CompanyLogo}
          ></img>
        </div>
      </div>
      <div className="full-title">
        <span className="title-text">Rig Scheduler</span>
        <span className="sub-title-text">
          Achieve on schedule and on budget rig planning
        </span>
      </div>
      <div className="computer-image">
        <img className="mockup" alt="Rig Scheduler Mockup" src={CompanyLogo} />
      </div>
      <div className="description"></div>
    </div>
  );
};

export default SchedulerHeader;
