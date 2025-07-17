import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import { useRoutes } from './hooks/useRoutes';

function App() {
  const routeElements = useRoutes();

  return (
    <>
      <Switch>
        {routeElements}
      </Switch>
    </>
  );
}

export default App;
