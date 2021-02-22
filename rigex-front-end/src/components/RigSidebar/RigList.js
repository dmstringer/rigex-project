import React from 'react';

import './sideBar.scss';
import { Droppable } from 'react-beautiful-dnd';

const RigList = ({ rigList, handleRigSelect, currentSelection }) => {
  return (
    <ul className="rigList">
      {rigList.map(({ id, name }) => (
        <Droppable droppableId={id} key={id}>
          {(provided) => (
            <li
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={
                currentSelection === id ? 'rigListItem selected' : 'rigListItem'
              }
              onClick={() => {
                handleRigSelect(id);
              }}
            >
              <div>
                <span>{name}</span>
              </div>
              <table>
                <tbody>{provided.placeholder}</tbody>
              </table>
            </li>
          )}
        </Droppable>
      ))}
    </ul>
  );
};

export default RigList;
