import React from 'react';

import { IonRow } from '@ionic/react';
import PageWithGrid from '@components/PageWithGrid';
import BlockButton from '@components/BlockButton';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShowModal, updateItem } from '@/store/item/itemSlice';
import { getCurrentTakenImage } from '@/store/image/imageSlice';
import { useApi } from '@/api/ApiHandler';
import ImageService from '@/api/image/imageService';
import { updateTakenImage } from '@/store/image/imageSlice';
import { addToHistory } from '@/store/history/historySlice';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { base64FromPath } from '@ionic/react-hooks/filesystem';
import moment from 'moment';
import { ApiData } from '@/api/ApiService';
import { items } from '@/models/items/items';

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

  const addToMemoryHandler = async (classification: string) => {
    if (!currentImage) return;
    const fileName = new Date().getTime() + '.jpeg';
    const base64 = await base64FromPath(currentImage.preview);
    await Filesystem.writeFile({
      path: fileName,
      data: base64,
      directory: Directory.Data,
    });
    const uuid = new Date().getTime().toString();
    const timeStamp = moment(new Date()).format('ddd, MMM Mo, HH:mm');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const itemId = items.find(item => item.ml_id === classification)!.id;
    console.log(itemId);
    dispatch(addToHistory({ id: uuid, imagePath: fileName, timeStamp: timeStamp, itemId: itemId, base64: base64 }));
    dispatch(updateTakenImage(null));
  };

  const predictImageHandler = async () => {
    try {
      const res = await uploadImage();
      if (!res.isSuccess) {
        // show error toast
        return;
      }
      const item = items.find(item => item.ml_id === (res as ApiData).class_name);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      dispatch(updateItem(item!));
      dispatch(toggleShowModal());
      console.log((res as ApiData).class_name);
      addToMemoryHandler((res as ApiData).class_name ?? '');
    } catch (err) {
      console.log(err);
    }
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
