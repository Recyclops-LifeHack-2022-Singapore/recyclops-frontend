import React from 'react';

import { IonPage, IonContent, IonGrid } from '@ionic/react';
import AppToolbar from '@components/AppToolbar';
import ItemModal from '@components/ItemModal';

type Props = {
  children: React.ReactNode;
};

const PageWithGrid = ({ children }: Props) => {
  return (
    <IonPage>
      <AppToolbar />
      <ItemModal />
      <IonContent className='font-Inter'>
        <IonGrid className='h-full w-full'>{children}</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PageWithGrid;
