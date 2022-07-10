import React from 'react';

import { IonGrid, IonRow } from '@ionic/react';
import LoadingIcon from './Rhombus.gif';

const Loader = () => {
  return (
    <div className='bg-[#ffffff] h-full w-full flex items-center justify-center'>
      <IonGrid>
        <IonRow className='justify-center'>
          <img src={LoadingIcon} />
        </IonRow>
        <IonRow className='justify-center pt-4'>
          <h1 className='text-black'>Loading...</h1>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Loader;
