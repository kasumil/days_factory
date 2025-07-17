import React from 'react';
import { AuthForm } from '../components/organisms';
import { useAuthLogic } from '../hooks/useAuth';

function Login() {
  const { isLoading, error, handleAuth, handleErrorClose } = useAuthLogic('login');

  return (
    <AuthForm
      type="login"
      onSubmit={handleAuth}
      isLoading={isLoading}
      error={error}
      onErrorClose={handleErrorClose}
    />
  );
}

export default Login;