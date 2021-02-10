import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';

import AuthForm from '../../components/authForm/AuthForm';
import validatePassword from '../../utils/validatePassword';
import { SIGN_UP_USER } from '../../constants/serviceAPI';
import { loginActions } from '../../store/login/action';

const SignUp = () => {
  const dispatch = useDispatch();

  const [createAccount, { loading, error, data }] = useMutation(SIGN_UP_USER, {
    onCompleted: ({ createAccount }) => {
      dispatch(loginActions.setLoggedInUser(createAccount));
    },
  });

  useEffect(() => {
    if (error) {
      //placeholder for future error handling
      console.log(error);
    }
  }, [error, loading, data]);

  const handleSubmit = ({ email, password }) => {
    if (validatePassword(password) === false) {
      if (email) {
        createAccount({
          variables: {
            model: { email, password },
          },
        });
      }
    }
  };

  return <AuthForm handleSubmit={handleSubmit} authType="signUp" />;
};

export default SignUp;
