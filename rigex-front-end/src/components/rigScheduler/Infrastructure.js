import React from 'react';

import './infrastructureStyles.scss';

const SchedulerInfrastructureBlock = ({
  InfrastructureHeadings,
  InfrastructureContent,
  DiskDrives,
}) => {
  const SchedulerInfrastructureBlockRender = () => {
    const DiskDriveName = ({ diskDriveFk }) => {
      return DiskDrives.map((element) => {
        if (element.id === diskDriveFk) {
          return element.title;
        } else {
          return null;
        }
      });
    };

    const GenerateDrives = ({ hasDrives }) => {
      if (hasDrives.length > 0) {
        return (
          <ul className="infrastructure-drives-list-text">
            {hasDrives.map((element) => (
              <li
                key={element.id}
                className="infrastructure-drives-section-text"
              >
                <DiskDriveName diskDriveFk={element.diskDriveFk} />
              </li>
            ))}
          </ul>
        );
      } else {
        return null;
      }
    };

    if (InfrastructureContent) {
      return InfrastructureContent.map((element) => (
        <li
          key={element.id}
          id={element.title}
          className="infrastructure-section-text"
        >
          {element.title}
          <GenerateDrives hasDrives={element.hasDrives} />
        </li>
      ));
    } else {
      return null;
    }
  };
  return (
    <div className="infrastructure-section">
      <span className="infrastructure-section-heading">
        {InfrastructureHeadings}
      </span>
      <ul>
        <SchedulerInfrastructureBlockRender />
      </ul>
    </div>
  );
};

export default SchedulerInfrastructureBlock;
