import React, { useState, useEffect } from 'react';
import { OutlinedInput, Dialog, IconButton, Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import './rigModal.scss';

const RigModal = ({
  handleClose,
  handleCreateOrUpdate,
  rigDetails: { id, isOpen, type, currentName },
}) => {
  const [rigName, setRigName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isCreateType, setIsCreateType] = useState(type === 'create');

  const handleChange = ({ target: { value } }) => {
    const regex = /^\s+$/;

    if (
      regex.test(value) ||
      !value.length ||
      (value === currentName && !isCreateType)
    ) {
      setIsValid(false);
      setRigName(value);
    } else {
      setIsValid(true);
      setRigName(value);
    }
  };

  const handleClick = () => {
    if (!isCreateType) {
      handleCreateOrUpdate(rigName, id);
    } else {
      handleCreateOrUpdate(rigName);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsCreateType(type === 'create');
      if (currentName.length) {
        setRigName(currentName);
      }
    } else if (!isOpen) {
      setRigName('');
      setIsValid(false);
    }
  }, [isOpen]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="dialog-box"
      >
        <div className="top-row">
          <h2 id="form-dialog-title" className="dialog-title">
            {isCreateType ? 'Create rig' : 'Edit rig'}
          </h2>
          <IconButton
            className="close-button"
            onClick={handleClose}
            children={<Close />}
          />
        </div>
        <p className="input-label-text">
          Rig name<span className="asterisk">*</span>
        </p>

        <OutlinedInput
          onChange={handleChange}
          className="rig-name-input"
          id="rig-name"
          placeholder="Enter a rig name"
          type="text"
          value={rigName.length ? rigName : ''}
        />
        <div className="button-container">
          <Button
            className={
              'create-rig-button ' +
              (isValid ? 'enabled-button' : 'disabled-button')
            }
            disabled={isValid ? false : true}
            type="submit"
            onClick={handleClick}
          >
            {isCreateType ? 'Create' : 'Save'}
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default RigModal;
