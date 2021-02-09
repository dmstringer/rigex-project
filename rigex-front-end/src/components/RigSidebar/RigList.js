import React from 'react';
import { List, ListItemText, MenuItem } from '@material-ui/core';

import './sideBar.scss';

function RigList(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  props.rigList.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <List>
      {props.rigList.map((rig, index) => (
        <MenuItem
          button
          key={rig.id}
          selected={selectedIndex === { index }}
          onClick={(event) => {
            handleListItemClick(event, { index });
            alert('TEST');
          }}
        >
          <ListItemText primary={rig.name} />
        </MenuItem>
      ))}
    </List>
  );
}

export default RigList;
