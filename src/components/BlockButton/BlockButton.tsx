import React from 'react';

import { IonButton } from '@ionic/react';
import { IonicColors } from '@/constants/constants';

type Props = {
  title: string;
  color?: IonicColors;
  className?: string;
  onClick: () => void;
};

const BlockButton = ({ title, color = 'primary', onClick, className }: Props) => {
  return (
    <IonButton onClick={onClick} color={color} className={`w-full ${className}`}>
      {title}
    </IonButton>
  );
};

export default BlockButton;
