import React from 'react';

import './listsStyle.scss';

const SchedulerListBlock = ({
  ListHeading,
  ListContent,
  ListHeadingColor,
  ListBackgroundColor,
}) => {
  const SchedulerListBlockRender = () => {
    if (ListContent) {
      return ListContent.map((element) => (
        <li className="lists-section-text">{element.text}</li>
      ));
    } else {
      return null;
    }
  };

  return (
    <div className="list-section-container">
      <div id={ListBackgroundColor} className="lists-section">
        <span className={'lists-section-heading ' + ListHeadingColor}>
          {ListHeading}
        </span>
        <ul>
          <SchedulerListBlockRender />
        </ul>
      </div>
    </div>
  );
};

export default SchedulerListBlock;
