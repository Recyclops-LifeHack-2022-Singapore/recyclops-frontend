import React from 'react';

import { IonPage, IonContent, IonGrid } from '@ionic/react';

type Props = {
  children: React.ReactNode;
};

const PageWithGrid = ({ children }: Props) => {
  return (
    <IonPage>
      <IonContent className='font-Inter'>
        <IonGrid className='h-screen w-screen'>{children}</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PageWithGrid;
