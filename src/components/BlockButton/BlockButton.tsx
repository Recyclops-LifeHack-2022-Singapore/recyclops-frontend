import React from 'react';

import { IonButton, IonLabel } from '@ionic/react';
import { IonicColors } from '@/constants/constants';

type Props = {
  title: string;
  color?: IonicColors;
  onClick?: () => void;
  className?: string;
};

const BlockButton = ({ title, color = 'primary', onClick, className }: Props) => {
  return (
    <IonButton mode='ios' onClick={onClick} color={color} className={`w-full font-epilogue ${className}`}>
      <IonLabel className='pt-1 text-lg font-semibold'>{title}</IonLabel>
    </IonButton>
  );
};

export default BlockButton;
