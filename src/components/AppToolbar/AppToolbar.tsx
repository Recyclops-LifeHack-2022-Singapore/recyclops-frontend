import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { leafOutline } from 'ionicons/icons';

const AppToolbar = () => {
  return (
    <IonHeader>
      <IonToolbar mode='ios' className='h-16 flex'>
        <IonTitle color='primary' className='font-epilogue font-semibold	text-2xl justify-center'>
          <IonIcon color='dark' className='pr-1' icon={leafOutline} />
          Recyclops
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppToolbar;
