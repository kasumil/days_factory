import React from 'react';
import { AuthForm } from '../components/organisms';
import { useAuthLogic } from '../hooks/useAuth';

function Register() {
  console.log('Register component rendering');
  
  const { isLoading, error, handleAuth, handleErrorClose } = useAuthLogic('register');

  console.log('Register component returning AuthForm with type="register"');

  return (
    <AuthForm
      type="register"
      onSubmit={handleAuth}
      isLoading={isLoading}
      error={error}
      onErrorClose={handleErrorClose}
    />
  );
}

export default Register;