import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Routes from '@/utilities/routes';

import Home from '@pages/Home';
import AuthHome from '@/pages/Authentication/Home';

const AppRouter = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <Route exact path={Routes.base}>
            <Redirect to={Routes.authentication.home} />
          </Route>
          <Route exact path={Routes.authentication.home} component={AuthHome} />
          <Route exact path={Routes.home} component={Home} />
          <Route exact path='*'>
            <Redirect to={Routes.base} />
          </Route>
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRouter;
