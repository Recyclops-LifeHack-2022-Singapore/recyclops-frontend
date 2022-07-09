import React from 'react';

import { IonContent, IonPage } from '@ionic/react';
import AppToolbar from '@/components/AppToolbar';
import BlockButton from '@/components/BlockButton';

const Home: React.FC = () => {
  return (
    <IonPage>
      <AppToolbar />
      <IonContent fullscreen className='relative'>
        <BlockButton title='hello' />
      </IonContent>
    </IonPage>
  );
};

export default Home;
