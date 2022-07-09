import React from 'react';

import { IonPage, IonContent, IonGrid } from '@ionic/react';
import AppToolbar from '@components/AppToolbar';

type Props = {
  children: React.ReactNode;
};

const PageWithGrid = ({ children }: Props) => {
  return (
    <IonPage>
      <AppToolbar />
      <IonContent className='font-Inter'>
        <IonGrid className='h-full w-full'>{children}</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PageWithGrid;
