import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth();

  console.log('ProtectedRoute - auth state:', { isAuthenticated, isLoading });

  if (isLoading) {
    console.log('ProtectedRoute - showing loading screen');
    // 로딩 중일 때는 로딩 화면 표시
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  console.log('ProtectedRoute - rendering route, isAuthenticated:', isAuthenticated);

  return (
    <Route
      {...rest}
      render={props => {
        console.log('ProtectedRoute - render props:', props);
        
        if (isAuthenticated) {
          console.log('ProtectedRoute - user authenticated, rendering component');
          return <Component {...props} />;
        } else {
          console.log('ProtectedRoute - user not authenticated, redirecting to login');
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute; 