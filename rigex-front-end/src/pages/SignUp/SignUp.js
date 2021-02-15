import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';

import { SIGN_UP_USER } from '../../constants/serviceAPI';
import { loginActions } from '../../store/login/action';
import AuthForm from '../../components/authForm/AuthForm';
import validatePassword from '../../utils/validatePassword';

const SignUp = () => {
  const dispatch = useDispatch();

  const [createAccount, { loading, error }] = useMutation(SIGN_UP_USER, {
    onCompleted: ({ createAccount }) => {
      dispatch(loginActions.setLoggedInUser(createAccount));
    },
  });

  const handleSubmit = ({ email, password }) => {
    if (validatePassword(password) === false) {
      createAccount({
        variables: {
          model: { email, password },
        },
      });
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [loading, error]);

  return <AuthForm handleSubmit={handleSubmit} authType="signUp" />;
};

export default SignUp;
