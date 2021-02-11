import React from 'react';
import {
  Input,
  IconButton,
  FormControl,
  InputLabel,
  Grid,
} from '@material-ui/core';
import {
  Mail,
  Lock,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from '@material-ui/icons';

import './authInput.scss';

const AuthInput = ({
  inputType,
  passwordIsVisible,
  handleChange,
  handleShowPasswordClick,
}) => {
  const isEmail = inputType === 'email';

  return (
    <Grid container alignItems="flex-end" className="text-input">
      <Grid item xs={1}>
        {isEmail ? (
          <Mail className="input-start-icon" />
        ) : (
          <Lock className="input-start-icon" />
        )}
      </Grid>
      <Grid item xs={10}>
        <FormControl className="auth-form-control">
          <InputLabel htmlFor={inputType} className="input-label">
            {isEmail ? 'Email' : 'Password'}
          </InputLabel>
          <Input
            disableUnderline
            type={isEmail ? 'text' : passwordIsVisible ? 'text' : 'password'}
            id={inputType}
            name={inputType}
            className="input-field-text"
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      {!isEmail && (
        <Grid item xs={1}>
          <IconButton
            className="input-icon-button"
            onClick={handleShowPasswordClick}
          >
            {passwordIsVisible ? (
              <VisibilityOutlined />
            ) : (
              <VisibilityOffOutlined />
            )}
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default AuthInput;
