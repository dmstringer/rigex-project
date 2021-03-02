import React from 'react';

import './listsStyle.scss';

const SchedulerListBlock = ({ ListHeading, ListContent, ListHeadingColor }) => {
  const SchedulerListBlockRender = () => {
    if (ListContent) {
      return ListContent.map((element) => (
        <li key={element.id} className="lists-section-text">
          {element.text}
        </li>
      ));
    } else {
      return null;
    }
  };

  return (
    <div className="lists-section">
      <span className={'lists-section-heading ' + ListHeadingColor}>
        {ListHeading}
      </span>
      <ul>
        <SchedulerListBlockRender />
      </ul>
    </div>
  );
};

export default SchedulerListBlock;
