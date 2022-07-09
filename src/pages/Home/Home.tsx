import React from 'react';

import { IonContent, IonPage } from '@ionic/react';
import AppToolbar from '@/components/AppToolbar';

const Home: React.FC = () => {
  return (
    <IonPage className='bg-[#F4F5F8]'>
      <AppToolbar />
      <IonContent fullscreen className='relative'></IonContent>
    </IonPage>
  );
};

export default Home;
