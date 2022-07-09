import { IonRow, IonCol, IonIcon } from '@ionic/react';
import React from 'react';

type Props = {
  icon: string;
  Header: React.ReactNode;
  children?: React.ReactNode;
  iconColor?: string;
  iconStyles?: string;
  className?: string;
};

// Header with Icon and Text and Content below inside IonRow
// Content to be included as children wrapped inside
// Must be included inside IonGrid

const TextIconHeader = ({ icon, Header, children, iconColor = 'primary', iconStyles = 'text-xl', className }: Props) => {
  return (
    <>
      <IonRow class='ion-align-items-center' className={className}>
        <IonCol class='ion-text-end' size='auto' className={iconStyles}>
          <IonIcon icon={icon} color={iconColor} />
        </IonCol>
        <IonCol class='ion-text-start ion-align-items-center'>{Header}</IonCol>
        <IonRow>
          <IonCol offset='1'>{children}</IonCol>
        </IonRow>
      </IonRow>
    </>
  );
};

export default TextIconHeader;
