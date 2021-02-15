import React from 'react';

import './sideBar.scss';

const RigList = ({ rigList, handleRigSelect, currentSelection }) => {
  return (
    <ul className="rigList">
      {rigList.map(({ id, name }) => (
        <li
          className={
            currentSelection === id ? 'rigListItem selected' : 'rigListItem'
          }
          key={id}
          onClick={() => {
            handleRigSelect(id);
          }}
        >
          <div>
            <span>{name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RigList;
