import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Mail from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlined from '@material-ui/icons/VisibilityOffOutlined';
import Grid from '@material-ui/core/Grid';

import './signUpForm.scss';
import { SIGN_UP_USER } from '../../constants/serviceAPI';
import { signUpActions } from '../../store/signUp/action';
import logo from '../../assets/large-logo.png';
import history from '../../utils/history';
import routePaths from '../../constants/routePaths';
import validatePassword from '../../utils/validatePassword';

const SignUpForm = () => {
  const [userState, setUserState] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [helpMessage, setHelpMessage] = useState('');
  const [CreateAccount, { loading, error, data }] = useMutation(SIGN_UP_USER);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validatePassword(userState.password) === false) {
      if (userState.email) {
        CreateAccount({
          variables: {
            model: { email: userState.email, password: userState.password },
          },
        });
      }
    } else {
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }

    if (data) {
      userState['id'] = data.createAccount.id;
      dispatch(signUpActions.setSignedUpUser(userState));
    }
  }, [dispatch, error, userState, data, loading]);

  const handleChange = ({ target: { value, name } }) => {
    setUserState((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setUserState({ ...userState, showPassword: !userState.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signUp-container">
      <div className="signUp-area">
        <div className="nested-signUp-container">
          <img className="logo" src={logo} alt="Rigex logo" />
          <form className="form">
            <Grid
              container
              alignItems="flex-end"
              className="text-input"
              style={{ marginBottom: '12px' }}
            >
              <Grid item xs={1}>
                <Mail className="input-start-icon" />
              </Grid>
              <Grid item xs={11}>
                <FormControl>
                  <InputLabel htmlFor="email">Email</InputLabel>
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
            <Grid
              container
              alignItems="flex-end"
              className="password-grid text-input"
              style={{ marginBottom: '16px' }}
            >
              <Grid item xs={1}>
                <Lock className="input-start-icon" />
              </Grid>
              <Grid item xs={10}>
                <FormControl>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    className="input-field-text"
                    disableUnderline={true}
                    id="password"
                    name="password"
                    label="Password"
                    type={userState.showPassword ? 'text' : 'password'}
                    value={userState.password}
                    onChange={handleChange}
                    onFocus={setHelpMessage}
                    aria-describedby="password-helper-text"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  className="show-password-button"
                  style={{
                    backgroundColor: 'transparent',
                  }}
                  aria-label="input-icon-button"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {userState.showPassword ? (
                    <VisibilityOutlined />
                  ) : (
                    <VisibilityOffOutlined />
                  )}
                </IconButton>
              </Grid>
            </Grid>
            {helpMessage ? (
              <div className="invalid-box">
                <div className="invalid-feedback">
                  At least 8 characters and contain a number.
                </div>
              </div>
            ) : (
              <div></div>
            )}

            <button
              className="input-button"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </button>

            <div className="bottom-links">
              <p className="login-link-text">
                Already have an account?{' '}
                <span
                  className="login-link"
                  onClick={() => {
                    history.push(routePaths.login);
                  }}
                >
                  Log in!
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
