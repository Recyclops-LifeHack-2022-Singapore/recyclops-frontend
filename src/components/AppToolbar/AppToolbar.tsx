import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonIcon, IonBackButton, IonButtons, IonLabel } from '@ionic/react';
import { leafOutline } from 'ionicons/icons';

import './main.css';

type Props = {
  title: string;
};

const AppToolbar = ({ title }: Props) => {
  return (
    <IonHeader className='h-16 w-10/12'>
      <IonToolbar color='primary' mode='ios' className='top-4 h-12 rounded-tr-xl rounded-br-xl'>
        <IonIcon color='dark' className='px-1 pt-2 float-left text-2xl' icon={leafOutline} />
        <IonLabel color='light' className='p-2 float-left font-epilogue font-semibold text-xl text-left'>
          {title}
        </IonLabel>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppToolbar;
