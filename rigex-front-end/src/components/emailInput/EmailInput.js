import React from 'react';
import { Input, FormControl, InputLabel, Grid } from '@material-ui/core';
import { Mail } from '@material-ui/icons';

const EmailInput = ({ handleChange }) => {
  return (
    <Grid container alignItems="flex-end" className="text-input">
      <Grid item xs={1}>
        <Mail className="input-start-icon" />
      </Grid>
      <Grid item xs={10}>
        <FormControl className="auth-form-control">
          <InputLabel htmlFor="email" className="input-label">
            Email
          </InputLabel>
          <Input
            disableUnderline
            type="text"
            id="email"
            name="email"
            className="input-field-text"
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default EmailInput;
