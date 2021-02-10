import React, { useEffect } from 'react';
import { List, ListItemText, MenuItem } from '@material-ui/core';

import './sideBar.scss';

const RigList = ({ rigList }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    rigList.sort((a, b) => (a.name > b.name ? 1 : -1));
  });

  return (
    <List>
      {rigList.map((rig, index) => (
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
};

export default RigList;
