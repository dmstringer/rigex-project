import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import {
  Input,
  Button,
  IconButton,
  Divider,
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

import { loginActions } from '../../store/login/action';
import { LOGIN_USER } from '../../constants/serviceAPI';
import history from '../../utils/history';
import routePaths from '../../constants/routePaths';
import logo from '../../assets/large-logo.png';
import './login.scss';

const Login = () => {
  const [userState, setUserState] = useState({ email: '', password: '' });
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [login, { loading, error, data }] = useLazyQuery(LOGIN_USER);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    login({
      variables: { userInput: { ...userState } },
    });
  };

  useEffect(() => {
    if (data) {
      dispatch(loginActions.setLoggedInUser(data.login));
    }
  }, [loading, error, data]);

  const handleChange = ({ target: { value, name } }) => {
    setUserState((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleShowPasswordClick = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };

  return (
    <div className="login-container">
      <div className="login-area">
        <div className="nested-login-container">
          <img className="logo" src={logo} alt="Rigex logo" />
          <form className="form">
            <Grid
              container
              alignItems="flex-end"
              className="text-input"
              style={{ marginBottom: '12px' }}
            >
              <Grid item>
                <Mail className="input-start-icon" />
              </Grid>
              <Grid item xs={10}>
                <FormControl>
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
            <Grid
              container
              alignItems="flex-end"
              className="text-input"
              style={{ marginBottom: '16px' }}
            >
              <Grid item>
                <Lock className="input-start-icon" />
              </Grid>
              <Grid item xs={9}>
                <FormControl>
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
              <Grid item>
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
            <Button
              className="input-button"
              type="submit"
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </form>
          <div className="bottom-links">
            <p className="forgot-password">
              <span className="hyperlink-hover">Forgot password?</span>
            </p>
            <Divider className="divider" />
            <p className="new-account-text">
              Don't have an account?{' '}
              <span
                className="new-account-link"
                onClick={() => {
                  history.push(routePaths.signUp);
                }}
              >
                Sign up!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
