import React, { useState, useRef } from 'react';
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './wellsDropdown.scss';

const WellsDropdown = ({ wellId, isSoloRig, handleWellDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleDropdownClick = (clickType, itemClicked) => {
    if (clickType === 'ellipses' && !isOpen) {
      setIsOpen(!isOpen);
    } else if (clickType === 'click away') {
      setIsOpen(!isOpen);
    } else if (itemClicked) {
      switch (itemClicked) {
        case 'delete':
          handleWellDelete(wellId);
          setIsOpen(!isOpen);
          break;
        case 'edit':
          setIsOpen(!isOpen);
          break;
        case 'move':
          setIsOpen(!isOpen);
          break;
        default:
          setIsOpen(!isOpen);
          break;
      }
    }
  };

  return (
    <div>
      <MoreHorizIcon
        className={isOpen ? 'well-ellipses open' : 'well-ellipses'}
        ref={anchorRef}
        onClick={() => {
          handleDropdownClick('ellipses');
        }}
      />
      <Popper
        transition
        disablePortal={true}
        open={isOpen}
        anchorEl={anchorRef.current}
        placement="bottom"
      >
        {({ TransitionProps }) => {
          return (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener
                  onClickAway={() => {
                    handleDropdownClick('click away');
                  }}
                >
                  <MenuList autoFocusItem={isOpen}>
                    <MenuItem
                      onClick={() => {
                        handleDropdownClick('list', 'edit');
                      }}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      disabled={isSoloRig}
                      onClick={() => {
                        handleDropdownClick('list', 'move');
                      }}
                    >
                      Move
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleDropdownClick('list', 'delete');
                      }}
                    >
                      Delete
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          );
        }}
      </Popper>
    </div>
  );
};

export default WellsDropdown;
