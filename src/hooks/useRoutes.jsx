import { routes, ROUTE_TYPES } from '../routes/route';
import ProtectedRoute from '../components/ProtectedRoute';
import PublicRoute from '../components/PublicRoute';

export const useRoutes = () => {
  const renderRoute = (route, index) => {
    const key = `route-${index}`;
    
    if (route.type === ROUTE_TYPES.PROTECTED) {
      return (
        <ProtectedRoute
          key={key}
          exact={route.exact}
          path={route.path}
          component={route.component}
          children={route.children}
        />
      );
    } else {
      return (
        <PublicRoute
          key={key}
          exact={route.exact}
          path={route.path}
          component={route.component}
          children={route.children}
        />
      );
    }
  };

  return routes.map(renderRoute);
}; 