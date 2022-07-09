import React from 'react';

import { IonRow } from '@ionic/react';
import PageWithGrid from '@components/PageWithGrid';
import BlockButton from '@components/BlockButton';
import { useSelector } from 'react-redux';
import { getCurrentTakenImage } from '@/store/image/imageSlice';
import { useApi } from '@/api/ApiHandler';
import ImageService from '@/api/image/imageService';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useDispatch } from 'react-redux';
import { updateTakenImage } from '@/store/image/imageSlice';

const ImagePreview = () => {
  const dispatch = useDispatch();
  const currentImage = useSelector(getCurrentTakenImage);
  const [uploadImage] = useApi(() => ImageService.predictData(currentImage));

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
  };

  const predictImageHandler = async () => {
    await uploadImage();
  };

  return (
    <PageWithGrid>
      <IonRow className='h-[10%]'></IonRow>
      <IonRow className='h-[5%] items-end'>
        <h1 className='text-center w-full font-epilogue font-medium'>Image Preview</h1>
      </IonRow>
      <IonRow className='h-[50%] justify-center'>
        {!currentImage && (
          <div className='bg-[#a8a8a873] rounded-xl h-full w-4/6 flex justify-center items-center'>
            <h1 className='font-epilogue'>No Image Taken</h1>
          </div>
        )}
        {currentImage && (
          <img
            src={currentImage.preview}
            alt='Preview'
            className='rounded-xl h-full w-4/6 flex justify-center items-center object-cover object-center'
          />
        )}
      </IonRow>
      <IonRow className='h-[10%] items-end px-16'>
        <BlockButton onClick={takePhotoHandler} title='Retake Photo' />
      </IonRow>
      <IonRow className='h-[10%] px-16'>
        <BlockButton onClick={predictImageHandler} title='Submit Photo' />
      </IonRow>
    </PageWithGrid>
  );
};

export default ImagePreview;
