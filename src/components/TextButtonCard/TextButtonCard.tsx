import React from 'react';
import { IonCard, IonText, IonCardContent, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';

type Props = {
  icon: string;
  text: string;
  onClick: () => void;
};
const TextButtonCard = ({ text, icon, onClick }: Props) => {
  return (
    <>
      <IonCard onClick={onClick} className='m-3 my-4 mt-2'>
        <IonCardContent className='p-2'>
          <IonGrid className='p-0'>
            <IonRow>
              <IonCol size='11'>
                <IonText className='text-lg text-black font-semibold'>{text}</IonText>
              </IonCol>
              <IonCol className='flex items-center align-middle text-2xl' size='1'>
                <IonIcon icon={icon} color='primary' />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default TextButtonCard;
