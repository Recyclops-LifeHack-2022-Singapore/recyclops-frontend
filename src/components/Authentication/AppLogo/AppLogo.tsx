import React from 'react';

import { IonGrid, IonRow, IonText } from '@ionic/react';

const AppLogo = () => {
  return (
    <IonGrid className='w-full'>
      <IonRow className='justify-center'>
        <div className='bg-grey rounded-full w-32 h-32' />
      </IonRow>
      <IonRow className='justify-center mt-2'>
        <IonText color='primary'>
          <h1 className='font-normal text-xl'>App Name</h1>
        </IonText>
      </IonRow>
    </IonGrid>
  );
};

export default AppLogo;
