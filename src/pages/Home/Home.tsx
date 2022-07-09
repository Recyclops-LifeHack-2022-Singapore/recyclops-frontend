import React from 'react';

import { IonRow, IonText, IonGrid } from '@ionic/react';
import IconTextHeader from '@/components/textIconHeader';
import PageWithGrid from '@components/PageWithGrid';
import ItemCard from '@components/ItemCard';
import { informationCircle, bulbOutline } from 'ionicons/icons';
import { resources } from '@/models/resources/resources';
import { link } from '@/models/categories/categories';
import BlockButton from '@/components/BlockButton';

const Home: React.FC = () => {
  const openLink = (link: string) => {
    const win = window.open(link, '_blank');
    if (!win) return;
    win.focus();
  };
  return (
    <PageWithGrid>
      <IconTextHeader
        className='h-[14%]'
        iconColor='dark'
        icon={bulbOutline}
        iconStyles='text-3xl'
        Header={
          <IonText className='font-epilogue text-lg font-medium leading-none' color='dark'>
            40% of the items we recycle are not suitable for recycling
          </IonText>
        }
      />
      <IconTextHeader
        className='h-[6%]'
        iconColor='dark'
        icon={informationCircle}
        iconStyles='text-3xl'
        Header={
          <IonText className='font-epilogue text-2xl font-medium' color='dark'>
            Find Out More!
          </IonText>
        }
      />
      <IonRow className='h-[60%]'>
        <IonGrid className='h-full p-0 overflow-y-auto'>
          {resources.map(resource => (
            <ItemCard onClick={() => openLink(resource.link)} className='m-4' key={resource.id} resource={resource} categoryArr={link} />
          ))}
        </IonGrid>
      </IonRow>
      <IonRow className='h-[20%] px-4 items-end'>
        <h1 className='pb-7 font-medium text-xl font-epilogue text-center h-0'>Check to see if your item is recyclable</h1>
        <BlockButton className='mb-5' title='Take a Photo' />
      </IonRow>
    </PageWithGrid>
  );
};

export default Home;
