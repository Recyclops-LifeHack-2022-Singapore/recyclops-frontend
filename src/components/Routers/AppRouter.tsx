import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Routes from '@/utilities/routes';
import { home, camera, time, search } from 'ionicons/icons';

import Home from '@pages/Home';
import Search from '@pages/Search';
import ImagePreview from '@pages/ImagePreview';

const AppRouter = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route exact path={Routes.home} component={Home} />
            <Route exact path={Routes.search} component={Search} />
            <Route exact path={Routes.imagePreview} component={ImagePreview} />
            <Route exact path='*'>
              <Redirect to={Routes.home} />
            </Route>
          </Switch>
        </IonRouterOutlet>
        <IonTabBar color='light' mode='ios' className='h-14' slot='bottom'>
          <IonTabButton tab='home' href={Routes.home}>
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab='camera'>
            <IonIcon icon={camera} />
          </IonTabButton>
          <IonTabButton tab='search' href={Routes.search}>
            <IonIcon icon={search} />
          </IonTabButton>
          <IonTabButton tab='history'>
            <IonIcon icon={time} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default AppRouter;
