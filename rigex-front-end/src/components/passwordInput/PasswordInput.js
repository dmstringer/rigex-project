import React, { useState } from 'react';
import {
  Input,
  IconButton,
  FormControl,
  InputLabel,
  Grid,
} from '@material-ui/core';
import {
  Lock,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from '@material-ui/icons';

const PasswordInput = ({ handleChange }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const handleShowPasswordClick = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };

  return (
    <Grid container alignItems="flex-end" className="text-input">
      <Grid item xs={1}>
        <Lock className="input-start-icon" />
      </Grid>
      <Grid item xs={10}>
        <FormControl className="auth-form-control">
          <InputLabel htmlFor="password" className="input-label">
            Password
          </InputLabel>
          <Input
            disableUnderline
            type={passwordIsVisible ? 'text' : 'password'}
            id="password"
            name="password"
            className="input-field-text"
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
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
    </Grid>
  );
};

export default PasswordInput;
