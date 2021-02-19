import React from 'react';
import Faker from 'faker';

import './headerStyle.scss';

import Mockup from '../../assets/Rig-Scheduler-Mockup.png';
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
        <img className="mockup" alt="Rig Scheduler Mockup" src={Mockup} />
      </div>
      <div className="description">
        <span className="description-text">
          Rig Scheduler solution powers rig teams to cut down non-utilized
          resource time. Rig teams can now meet the challenges of oil and gas
          rig scheduling with the solution’s intuitive user interface
          specifically designed for them. Build and configure a rig plan based
          on operational requirements, and cut down on manipulating manual
          project management tools. Gain better insights into a rig program and
          ensure projects are on schedule and on budget.
        </span>
      </div>
    </div>
  );
};

export default SchedulerHeader;
