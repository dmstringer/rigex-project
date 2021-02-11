import React, { useEffect } from 'react';

import './sideBar.scss';

const RigList = ({ rigList }) => {
  const [selectedIndex, setSelectedIndex] = React.useState();
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    rigList.sort((a, b) => (a.name > b.name ? 1 : -1));
  });

  return (
    <ul className='rigList'>
      {rigList.map((rig, index) => (
        <li
          className={selectedIndex === index ? 'rigListItem selected' : 'rigListItem'}
          key={rig.id}
          onClick={() => {
            handleListItemClick(index);
          }}
        >
          <div>
            <span>{rig.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RigList;
