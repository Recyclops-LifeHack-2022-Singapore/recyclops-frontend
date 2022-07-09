import React, { useState } from 'react';

import { IonGrid, IonRow, IonButton, SegmentChangeEventDetail } from '@ionic/react';

import AppLogo from '@components/Authentication/AppLogo';
import InputWithLabel from '@/components/InputWithLabel';
import AuthToggleSegment from '@components/Authentication/AuthToggleSegment';
import PageWithGrid from '@components/PageWithGrid';
import { AuthPageTypes } from '@components/Authentication/AuthToggleSegment/AuthToggleSegment';

const Home = () => {
  const [currentPage, setCurrentPage] = useState<AuthPageTypes>('SignIn');

  const pageToggleHandler = (e: CustomEvent<SegmentChangeEventDetail>) => {
    setCurrentPage(e.detail.value as AuthPageTypes);
  };

  console.log('reloaded');

  return (
    <PageWithGrid>
      <IonRow className='h-[38%] items-end'>
        <IonGrid className='w-full'>
          <IonRow className='justify-center'>
            <AppLogo />
          </IonRow>
          <IonRow>
            <AuthToggleSegment onChange={pageToggleHandler} value={currentPage} />
          </IonRow>
        </IonGrid>
      </IonRow>
      <IonRow className='h-[40%] items-start'>
        <IonGrid className='w-full'>
          <IonRow className='px-5 pt-1'>
            <InputWithLabel className='mr-5' type='email' labelText='Email' placeholder='john.doe@gmail.com' />
            <InputWithLabel className='mr-5' type='password' labelText='Password' placeholder='8 characters, 1 capital' />
            {currentPage === 'SignUp' && (
              <InputWithLabel className='mr-5' type='password' labelText='Confirm Password' placeholder='8 characters, 1 capital' />
            )}
          </IonRow>
        </IonGrid>
      </IonRow>
      <IonRow className='h-[23%]'>
        <IonGrid>
          <IonRow className='justify-center'>
            <IonButton mode='ios' className='w-4/5 font-Inter text-xl h-12 font-light'>
              {currentPage === 'SignUp' ? 'Sign Up' : 'Sign In'}
            </IonButton>
          </IonRow>
          <IonRow className='justify-center pt-3'>
            <a className='text-[#9D9FA6] text-sm'>Forgot your password?</a>
          </IonRow>
        </IonGrid>
      </IonRow>
    </PageWithGrid>
  );
};

export default Home;
