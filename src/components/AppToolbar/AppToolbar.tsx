import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonIcon, IonBackButton, IonButtons } from '@ionic/react';
import { leafOutline } from 'ionicons/icons';

const AppToolbar = () => {
  return (
    <IonHeader>
      <IonToolbar color='light' mode='ios' className='h-14 flex'>
        <IonButtons slot='start'>
          <IonBackButton />
        </IonButtons>
        <IonTitle color='primary' className='font-epilogue font-semibold text-2xl justify-center'>
          <IonIcon color='dark' className='pr-1' icon={leafOutline} />
          Recyclops
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppToolbar;
