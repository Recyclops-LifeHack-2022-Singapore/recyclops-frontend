import React, { useEffect } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonIcon } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Routes from '@/utilities/routes';
import { home, camera, time, search } from 'ionicons/icons';

import Home from '@pages/Home';
import Search from '@pages/Search';
import ImagePreview from '@pages/ImagePreview';
import TakePhoto from '@pages/TakePhoto';
import History from '@pages/History';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { HistoryData } from '@/store/history/historySlice';
import { useDispatch } from 'react-redux';
import { setHistory } from '@/store/history/historySlice';

import './main.css';

const AppRouter = () => {
  const dispatch = useDispatch();

  const initHistory = async () => {
    const historyData = await Storage.get({ key: 'history' });
    const storedHistory: HistoryData[] = historyData.value ? JSON.parse(historyData.value) : [];

    const loadedHistory: HistoryData[] = [];
    for (const history of storedHistory) {
      const file = await Filesystem.readFile({
        path: history.imagePath,
        directory: Directory.Data,
      });
      loadedHistory.push({ ...history, base64: 'data:image/jpeg;base64,' + file.data });
    }
    dispatch(setHistory(loadedHistory));
  };

  useEffect(() => {
    initHistory();
  }, []);

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route exact path={Routes.home} component={Home} />
            <Route exact path={Routes.search} component={Search} />
            <Route exact path={Routes.imagePreview} component={ImagePreview} />
            <Route exact path={Routes.takePhoto} component={TakePhoto} />
            <Route exact path={Routes.history} component={History} />
            <Route exact path='*'>
              <Redirect to={Routes.home} />
            </Route>
          </Switch>
        </IonRouterOutlet>
        <IonTabBar color='light' mode='ios' className='h-12' slot='bottom'>
          <IonTabButton tab='home' href={Routes.home}>
            <IonIcon className='h-6' icon={home} />
          </IonTabButton>
          <IonTabButton tab='camera' href={Routes.takePhoto}>
            <IonIcon className='h-6' icon={camera} />
          </IonTabButton>
          <IonTabButton tab='search' href={Routes.search}>
            <IonIcon className='h-6' icon={search} />
          </IonTabButton>
          <IonTabButton tab='history' href={Routes.history}>
            <IonIcon className='h-6' icon={time} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default AppRouter;
