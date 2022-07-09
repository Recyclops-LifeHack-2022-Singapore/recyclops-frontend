import { IonGrid, IonImg, IonModal, IonRow, IonText } from '@ionic/react';
import { caretForward } from 'ionicons/icons';
import React, { useRef } from 'react';
import TextIconHeader from '../textIconHeader';

interface Props {
  showModal: boolean;
  onDismiss: () => void;
}

const NoMatchModal = ({ showModal, onDismiss }: Props) => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <>
      <IonModal
        id='example-modal'
        ref={modal}
        isOpen={showModal}
        backdropDismiss={true}
        onDidDismiss={onDismiss}
        className='text-black items-center px-3'
      >
        <IonGrid>
          <IonRow className='justify-center'>
            <IonImg src='assets/SorryImage.png' alt='No Match Found' style={{ height: '20vh' }} />
          </IonRow>
          <IonRow>
            <IonText className='font-epilogue font-semibold text-2xl px-1 ml-3 mt-2 mb-1'>
              Sorry, We were unable to identify your object.
            </IonText>
          </IonRow>
          <TextIconHeader
            icon={caretForward}
            Header={<IonText className='font-epilogue font-medium px-1'>Retry taking the picture with a better lighting and view</IonText>}
            iconColor='#ffffff'
            iconStyles='ml-3'
          />
          <TextIconHeader
            icon={caretForward}
            Header={<IonText className='font-epilogue font-medium px-1'>Try searching for the Object in the Search tab</IonText>}
            iconColor='#ffffff'
            iconStyles='ml-3'
          />
        </IonGrid>
      </IonModal>
    </>
  );
};

export default NoMatchModal;
