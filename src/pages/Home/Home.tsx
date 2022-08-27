import React from 'react';

import { useHistory } from 'react-router';
import Routes from '@/utilities/routes';
import { IonRow, IonText, IonGrid } from '@ionic/react';
import IconTextHeader from '@/components/textIconHeader';
import PageWithGrid from '@components/PageWithGrid';
import { informationCircle, bulbOutline, linkSharp } from 'ionicons/icons';
import { resources } from '@/models/resources/resources';
import BlockButton from '@/components/BlockButton';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useDispatch } from 'react-redux';
import { updateTakenImage } from '@/store/image/imageSlice';
import TextButtonCard from '@/components/TextButtonCard';

const Home: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openLink = (link: string) => {
    const win = window.open(link, '_blank');
    if (!win) return;
    win.focus();
  };

  const takePhotoHandler = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 80,
      width: 224,
      height: 224,
    });
    if (!photo || !photo.webPath) return;
    dispatch(
      updateTakenImage({
        path: photo.path,
        preview: photo.webPath,
      }),
    );
    history.push(Routes.imagePreview);
  };

  return (
    <PageWithGrid toolbarTitle='Welcome to Recyclops!'>
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
        iconStyles='text-2xl'
        Header={
          <IonText className='font-epilogue text-xl font-medium' color='dark'>
            Additional Resources
          </IonText>
        }
      />
      <IonRow className='h-[55%]'>
        <IonGrid className='h-full p-0 overflow-y-auto'>
          {resources.map(
            resource =>
              !!resource.name && (
                <TextButtonCard onClick={() => openLink(resource.link)} key={resource.id} text={resource.name} icon={linkSharp} />
              ),
          )}
        </IonGrid>
      </IonRow>
      <IonRow className='h-[25%] px-4 items-end'>
        <h1 className='font-medium text-xl font-epilogue text-center'>Check to see if your item is recyclable</h1>
        <BlockButton className='mb-5' title='Take a Photo' onClick={takePhotoHandler} />
      </IonRow>
    </PageWithGrid>
  );
};

export default Home;
