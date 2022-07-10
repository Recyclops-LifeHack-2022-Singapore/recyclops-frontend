import { setShowErrorModal } from '@/store/item/itemSlice';
import { IonGrid, IonImg, IonModal, IonRow, IonText } from '@ionic/react';
import { caretForward } from 'ionicons/icons';
import React, { useRef } from 'react';
import TextIconHeader from '../textIconHeader';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';

const NoMatchModal = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const showErrorModal = useSelector((state: RootState) => state.item.showErrorModal);
  const isError = useSelector((state: RootState) => state.item.isError);
  const dispatch = useDispatch();

  const onDismiss = () => {
    dispatch(setShowErrorModal(false));
  };
  return (
    <>
      <IonModal
        id='example-modal'
        ref={modal}
        isOpen={showErrorModal}
        backdropDismiss={true}
        onDidDismiss={onDismiss}
        className='text-black items-center px-3'
      >
        <IonGrid className=''>
          <IonRow className='justify-center items-end h-[50%]'>
            <IonImg src='assets/SorryImage.png' alt='No Match Found' style={!isError ? { height: '20vh' } : {}} />
          </IonRow>
          <IonRow className='h-[50%]'>
            <IonText className='font-epilogue font-semibold text-2xl px-1 ml-3 mt-2 mb-1'>
              {isError
                ? 'Sorry, Something went wrong on our side. Please try again later.'
                : 'Sorry, We were unable to identify your object.'}
            </IonText>
          </IonRow>
          {!isError && (
            <TextIconHeader
              icon={caretForward}
              Header={
                <IonText className='font-epilogue font-medium px-1'>Retry taking the picture with a better lighting and view</IonText>
              }
              iconColor='#ffffff'
              iconStyles='ml-3'
            />
          )}
          {!isError && (
            <TextIconHeader
              icon={caretForward}
              Header={<IonText className='font-epilogue font-medium px-1'>Try searching for the Object in the Search tab</IonText>}
              iconColor='#ffffff'
              iconStyles='ml-3'
            />
          )}
        </IonGrid>
      </IonModal>
    </>
  );
};

export default NoMatchModal;
