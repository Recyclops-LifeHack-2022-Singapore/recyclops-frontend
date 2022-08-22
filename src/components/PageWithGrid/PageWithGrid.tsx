import React from 'react';

import { IonPage, IonContent, IonGrid } from '@ionic/react';
import AppToolbar from '@components/AppToolbar';
import ItemModal from '@components/ItemModal';
import NoMatchModal from '@/components/NoMatchModal';

type Props = {
  toolbarTitle: string;
  children: React.ReactNode;
};

const PageWithGrid = ({ toolbarTitle, children }: Props) => {
  return (
    <>
      <IonPage>
        <AppToolbar title={toolbarTitle} />
        <ItemModal />
        <NoMatchModal />
        <IonContent className='font-Inter'>
          <IonGrid className='h-full w-full'>{children}</IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default PageWithGrid;
