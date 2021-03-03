import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@material-ui/core';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import { loginActions } from '../../store/login/action';
import './profileDropdown.scss';

const ProfileDropdown = ({ user }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleDropdownClick = (clickType) => {
    if (clickType === 'profile icon' && !isOpen) {
      setIsOpen(!isOpen);
    } else if (clickType === 'click away') {
      setIsOpen(!isOpen);
    }
  };
  return (
    <div>
      <PersonOutlineOutlinedIcon
        fontSize="large"
        className="person-icon"
        ref={anchorRef}
        onClick={() => {
          handleDropdownClick('profile icon');
        }}
      />
      <Popper
        transition
        disablePortal={true}
        open={isOpen}
        anchorEl={anchorRef.current}
        placement="bottom-end"
        className="profile-dropdown-popper"
      >
        {({ TransitionProps }) => {
          return (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: 'center left',
              }}
            >
              <Paper className="dropdown">
                <ClickAwayListener
                  onClickAway={() => {
                    handleDropdownClick('click away');
                  }}
                >
                  <MenuList autoFocusItem={isOpen}>
                    <MenuItem disabled className="user-info">
                      <p className="category-header">Email</p>
                      <p className="category-body">{user.email}</p>
                    </MenuItem>
                    <MenuItem
                      className="logout"
                      onClick={() => {
                        dispatch(loginActions.logout());
                      }}
                    >
                      Logout
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

export default ProfileDropdown;
