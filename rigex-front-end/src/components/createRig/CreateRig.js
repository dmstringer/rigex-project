import React, { useState } from 'react';
import { OutlinedInput, Dialog, IconButton, Button } from '@material-ui/core';

import { Close } from '@material-ui/icons';

import './createRig.scss';

const CreateRig = ({ isOpen, handleClose, handleCreate }) => {
  const [rigName, setRigName] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = ({ target: { value } }) => {
    const regex = /^\s+$/;

    if (regex.test(value) || !value.length) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setRigName(value);
    }
  };

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
            Create rig
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
        />
        <div className="button-container">
          <Button
            className={
              'create-rig-button ' +
              (isValid ? 'enabled-button' : 'disabled-button')
            }
            disabled={isValid ? false : true}
            type="submit"
            onClick={() => handleCreate(rigName)}
          >
            Create
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default CreateRig;
