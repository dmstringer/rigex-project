import React from 'react';
import Faker from 'faker';

import './headerStyle.scss';
import Description from '../../components/rigScheduler/Description';

const CompanyLogo = Faker.image.business();

const SchedulerHeader = () => {
  return (
    <div className="rig-scheduler-header-grid-container">
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
      <Description />
    </div>
  );
};

export default SchedulerHeader;
