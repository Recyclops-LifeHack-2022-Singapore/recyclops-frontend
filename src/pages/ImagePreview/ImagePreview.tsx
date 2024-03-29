import React, { useState } from 'react';

import { IonRow } from '@ionic/react';
import PageWithGrid from '@components/PageWithGrid';
import BlockButton from '@components/BlockButton';
import { useSelector, useDispatch } from 'react-redux';
import { setisError, setShowErrorModal, toggleShowModal, updateItem } from '@/store/item/itemSlice';
import { getCurrentTakenImage } from '@/store/image/imageSlice';
import { useApi } from '@/api/ApiHandler';
import ImageService from '@/api/image/imageService';
import { updateTakenImage } from '@/store/image/imageSlice';
import { addToHistory } from '@/store/history/historySlice';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { base64FromPath } from '@ionic/react-hooks/filesystem';
import moment from 'moment';
import { items } from '@/models/items/items';
import Loader from '@/components/Loader';

const ImagePreview = () => {
  const dispatch = useDispatch();
  const currentImage = useSelector(getCurrentTakenImage);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setIsLoading(true);
    try {
      const res = await uploadImage();
      setIsLoading(false);
      if (!res.isSuccess) {
        dispatch(setisError(true));
        dispatch(setShowErrorModal(true));
        return;
      }
      if (res.confidence < 0.65) {
        dispatch(setisError(false));
        dispatch(setShowErrorModal(true));
        return;
      }
      const item = items.find(item => item.ml_id === res.class_name);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      dispatch(updateItem(item!));
      dispatch(toggleShowModal());
      addToMemoryHandler(res.class_name ?? '');
    } catch (err) {
      console.log(err);
    }
  };

  const ImagePreviewComponent = () => {
    return (
      <>
        <IonRow className='h-[2%]'></IonRow>
        <IonRow className='h-[78%] justify-center'>
          {!currentImage && (
            <div className='bg-[#a8a8a873] rounded-xl h-full w-11/12 flex justify-center items-center'>
              <h1 className='font-epilogue'>No Image Taken</h1>
            </div>
          )}
          {currentImage && (
            <img
              src={currentImage.preview}
              alt='Preview'
              className='rounded-xl h-full w-11/12 flex justify-center items-center object-cover object-center'
            />
          )}
        </IonRow>
        <IonRow className='h-[10%] items-end px-16'>
          <BlockButton onClick={takePhotoHandler} title='Retake Photo' />
        </IonRow>
        <IonRow className='h-[10%] px-16'>
          <BlockButton onClick={predictImageHandler} title='Submit Photo' />
        </IonRow>
      </>
    );
  };

  return (
    <PageWithGrid toolbarTitle='Scan Your Recyclables!'>
      {isLoading && <Loader />} {!isLoading && <ImagePreviewComponent />}
    </PageWithGrid>
  );
};

export default ImagePreview;
