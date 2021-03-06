import React, { useEffect } from 'react';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useDispatch } from 'react-redux';
import { updateTakenImage } from '@/store/image/imageSlice';
import { useHistory } from 'react-router';
import Routes from '@/utilities/routes';

const TakePhoto = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const takePhotoHandler = async () => {
    try {
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
      history.replace(Routes.home);
      history.push(Routes.imagePreview);
    } catch (err) {
      history.go(-1);
    }
  };

  useEffect(() => {
    takePhotoHandler();
  }, []);

  return <></>;
};

export default TakePhoto;
