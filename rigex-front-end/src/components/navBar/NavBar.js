import React, { useEffect, useState, useRef } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import {
  InputBase,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@material-ui/core';

import routePaths from '../../constants/routePaths';
import logo from '../../assets/rigex-logo-small.svg';
import './navBar.scss';
import history from '../../utils/history';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import createSearchList from '../../utils/createSearchList';

const NavBar = ({ user, rigList, handleRigSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSearchValue, setCurrentSearchValue] = useState('');
  const [searchList, setSearchList] = useState({});
  const [resultElements, setResultElements] = useState([]);
  const anchorRef = useRef(null);

  useEffect(() => {
    if (rigList.length) {
      setSearchList(createSearchList(rigList));
    }
  }, [rigList]);

  const resetSearchBar = () => {
    setIsExpanded(false);
    setIsOpen(false);
    setCurrentSearchValue('');
    setResultElements([]);
  };

  const getSearchResults = (input) => {
    const { wells, rigs } = searchList;
    const alphanumericRegex = /^[a-zA-Z0-9 ]*$/;
    const numberRegex = /^-?\d*\.?\d+$/;

    const isAlphanumeric = alphanumericRegex.test(input);
    const isNumber = numberRegex.test(input);
    const results = [];

    if (!isAlphanumeric && !isNumber) {
      return [];
    } else if (isNumber && isAlphanumeric) {
      wells.forEach(({ latitude, longitude, name, rigId }) => {
        if (
          latitude.toString().includes(input) ||
          longitude.toString().includes(input) ||
          name.toLowerCase().includes(input)
        ) {
          results.push({
            name,
            rigId,
            type: 'Well',
          });
        }
      });
      rigs.forEach(({ name, id, type }) => {
        if (name.toLowerCase().includes(input)) {
          results.push({
            name,
            rigId: id,
            type,
          });
        }
      });
    } else if (!isNumber && isAlphanumeric) {
      wells.forEach(({ name, rigId }) => {
        if (name.toLowerCase().includes(input)) {
          results.push({
            name,
            rigId,
            type: 'Well',
          });
        }
      });
      rigs.forEach(({ name, id, type }) => {
        if (name.toLowerCase().includes(input)) {
          results.push({
            name,
            rigId: id,
            type,
          });
        }
      });
    } else if (isNumber && !isAlphanumeric) {
      wells.forEach(({ name, rigId, latitude, longitude }) => {
        if (
          latitude.toString().includes(input) ||
          longitude.toString().includes(input)
        ) {
          results.push({
            name,
            rigId,
            type: 'Well',
          });
        }
      });
    }
    return results;
  };

  const handleChange = ({ target: { value } }) => {
    setCurrentSearchValue(value);
    const spaceRegex = /^\s+$/;
    if (!value.length || spaceRegex.test(value)) {
      setResultElements([]);
      setIsOpen(false);
      return;
    }
    const searchResults = getSearchResults(value.toLowerCase());
    if (!searchResults.length && currentSearchValue.length) {
      setIsOpen(true);
      setResultElements([]);
      return;
    }
    if (searchResults.length) {
      if (!isOpen) {
        setIsOpen(true);
      }
      const newResultElements = searchResults.map(
        ({ rigId, name, type }, index) => (
          <MenuItem
            key={index}
            className="search-result"
            onClick={() => {
              handleRigSelect(rigId);
              resetSearchBar();
            }}
          >
            <p className="result-name">{name}</p>
            <p className="result-type">{type}</p>
          </MenuItem>
        )
      );

      setResultElements(newResultElements);
    }
  };

  const handleClickAway = () => {
    if (!currentSearchValue) {
      resetSearchBar();
    }
    setIsOpen(false);
  };

  return (
    <div className="navBar">
      <div className="logo">
        <button onClick={() => history.push(routePaths.landing)}>
          <img src={logo} alt="Rigex" />
        </button>
      </div>
      <div className="iconBox">
        {!isExpanded && (
          <button
            aria-label="search bar button"
            onClick={() => setIsExpanded(true)}
          >
            <SearchIcon fontSize="large" />
          </button>
        )}
        {isExpanded && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div ref={anchorRef}>
              <div className="searchbar">
                <SearchIcon className="search-icon" />
                <InputBase
                  className="input-box"
                  onChange={handleChange}
                  onFocus={() => {
                    if (resultElements.length) {
                      setIsOpen(true);
                    }
                  }}
                  autoFocus
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
                <CloseIcon className="close-icon" onClick={resetSearchBar} />
                <Popper
                  modifiers={{
                    preventOverflow: {
                      enabled: true,
                      boundariesElement: 'scrollParent',
                    },
                  }}
                  transition
                  disablePortal={true}
                  open={isOpen}
                  anchorEl={anchorRef.current}
                  placement="bottom"
                  className="results-popper"
                >
                  {({ TransitionProps }) => {
                    return (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin: 'center',
                        }}
                      >
                        <Paper className="results-dropdown">
                          <MenuList className="menu-list">
                            {resultElements.length !== 0 && resultElements}
                            {resultElements.length === 0 &&
                              currentSearchValue.length && (
                                <MenuItem>No results</MenuItem>
                              )}
                          </MenuList>
                        </Paper>
                      </Grow>
                    );
                  }}
                </Popper>
              </div>
            </div>
          </ClickAwayListener>
        )}
        <button aria-label="account of current user">
          <ProfileDropdown user={user} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
