import React, { useState } from 'react';
import { Button, Divider } from '@material-ui/core';

import history from '../../utils/history';
import routePaths from '../../constants/routePaths';
import logo from '../../assets/large-logo.png';
import EmailInput from '../emailInput/EmailInput';
import PasswordInput from '../passwordInput/PasswordInput';
import './authForm.scss';

const AuthForm = ({ handleSubmit, authType }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [userState, setUserState] = useState({ email: '', password: '' });

  const isLoginType = authType === 'login';

  const handleChange = ({ target: { value, name } }) => {
    setUserState((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleShowPasswordClick = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };

  return (
    <div className="auth-container">
      <div className="auth-area">
        <div className="nested-auth-container">
          <img className="logo" src={logo} alt="Rigex logo" />
          <form className="form">
            <EmailInput handleChange={handleChange} />
            <PasswordInput
              handleChange={handleChange}
              passwordIsVisible={passwordIsVisible}
              handleShowPasswordClick={handleShowPasswordClick}
            />
            <Button
              className="input-button"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit(userState);
              }}
            >
              {isLoginType ? 'Log in' : 'Sign up'}
            </Button>
          </form>
          <div className="bottom-links">
            {isLoginType ? (
              <div>
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
            ) : (
              <div>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
