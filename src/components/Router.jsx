import React from 'react';
import { Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import { routes, ROUTE_TYPES } from '../routes/route';

const Router = () => {
  const renderRoute = (route, index) => {
    const key = `route-${index}`;
    
    if (route.type === ROUTE_TYPES.PROTECTED) {
      return (
        <ProtectedRoute
          key={key}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      );
    } else {
      return (
        <PublicRoute
          key={key}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      );
    }
  };

  return (
    <Switch>
      {routes.map(renderRoute)}
    </Switch>
  );
};

export default Router; 