import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';

import { loginActions } from '../../store/login/action';
import { LOGIN_USER } from '../../constants/serviceAPI';
import AuthForm from '../../components/authForm/AuthForm';

const Login = () => {
  const dispatch = useDispatch();

  const [login, { loading, error }] = useLazyQuery(LOGIN_USER, {
    onCompleted: ({ login }) => {
      dispatch(loginActions.setLoggedInUser(login));
    },
  });

  const handleSubmit = ({ email, password }) => {
    login({
      variables: { userInput: { email, password } },
    });
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [loading, error]);

  return <AuthForm handleSubmit={handleSubmit} authType="login" />;
};

export default Login;
