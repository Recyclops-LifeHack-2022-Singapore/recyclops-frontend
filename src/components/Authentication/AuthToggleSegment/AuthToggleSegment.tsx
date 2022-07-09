import React from 'react';

import { IonSegment, IonSegmentButton, IonLabel, SegmentChangeEventDetail, IonGrid, IonRow } from '@ionic/react';

import styles from './AuthToggleSegment.module.css';

export type AuthPageTypes = 'SignIn' | 'SignUp';

type Props = {
  onChange?: (e: CustomEvent<SegmentChangeEventDetail>) => void;
  value: AuthPageTypes;
};

const AuthToggleSegment = ({ onChange, value }: Props) => {
  return (
    <IonGrid className='w-full'>
      <IonRow className='justify-center'>
        <div>
          <IonSegment onIonChange={onChange} value={value} mode='md'>
            <IonSegmentButton value='SignIn' className={`h-1 normal-case font-Inter mx-3 ${styles.noRipple}`}>
              <IonLabel className='mb-0'>Sign In</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='SignUp' className={`h-1 normal-case font-Inter mx-3 ${styles.noRipple}`}>
              <IonLabel className='mb-0'>Sign Up</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>
      </IonRow>
    </IonGrid>
  );
};

export default AuthToggleSegment;
