import React from 'react';

import { IonButton } from '@ionic/react';
import { IonicColors } from '@/constants/constants';

type Props = {
  title: string;
  color?: IonicColors;
  onClick?: () => void;
  className?: string;
};

const BlockButton = ({ title, color = 'primary', onClick, className }: Props) => {
  return (
    <IonButton onClick={onClick} color={color} className={`w-full font-epilogue ${className}`}>
      {title}
    </IonButton>
  );
};

export default BlockButton;
