import React from 'react';

import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { TextFieldTypes } from '@ionic/core';

type Props = {
  position?: 'fixed' | 'stacked' | 'floating';
  labelText: string;
  type?: TextFieldTypes;
  placeholder?: string;
  className?: string;
  onChange?: () => void;
  // eslint-disable-next-line
  value?: any;
};

const InputWithLabel = ({ type = 'text', placeholder, labelText, className, onChange, value, position = 'floating' }: Props) => {
  return (
    <IonItem className={`w-full ${className}`}>
      <IonLabel position={position}>{labelText}</IonLabel>
      <IonInput value={value} onChange={onChange} type={type} placeholder={placeholder}></IonInput>
    </IonItem>
  );
};

export default InputWithLabel;
