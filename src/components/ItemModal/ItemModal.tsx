import React, { useRef } from 'react';
import TextIconHeader from '../textIconHeader';
import { pricetag, checkmarkCircle, closeCircle, informationCircle, caretForward, arrowForward } from 'ionicons/icons';
import { IonContent, IonGrid, IonIcon, IonModal, IonRow, IonText } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleHideModal } from '@/store/item/itemSlice';
import { categories } from '@/models/categories/categories';

import './main.css';
import { resources } from '@/models/resources/resources';
import BlockButton from '../BlockButton';

const ItemModal = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const dispatch = useDispatch();
  const item = useSelector((state: RootState) => state.item.item);
  const remarksArr = useSelector((state: RootState) => state.item.remarksArr);
  const showModal = useSelector((state: RootState) => state.item.showModal);
  const onDismiss = () => {
    dispatch(toggleHideModal());
  };

  const openLink = (link: string) => {
    const win = window.open(link, '_blank');
    if (!win) return;
    win.focus();
  };

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
        <IonContent>
          <IonGrid className='pt-5 px-3 h-[40%]'>
            <IonRow>
              <IonText className='not-italic font-bold text-2xl ml-1 text-black font-epilogue mb-2'>{item.name}</IonText>
            </IonRow>
            <IonRow>
              <TextIconHeader
                icon={item.isRecyclable ? checkmarkCircle : closeCircle}
                iconStyles='text-2xl pr-0 pt-3'
                Header={<IonText className='font-epilogue font-medium px-2'>{item.isRecyclable ? 'Recyclable' : 'Not Recyclable'}</IonText>}
                iconColor={item.isRecyclable ? 'success' : 'danger'}
              />
            </IonRow>
            <IonRow className='mb-2'>
              <TextIconHeader
                icon={pricetag}
                Header={categories
                  .filter(cat => cat.id === item.categoryId)
                  .map(cat => (
                    <IonText
                      key={cat.id}
                      className={`font-epilogue font-medium py-1 px-2 mr-1 rounded-xl`}
                      style={{ backgroundColor: cat.color }}
                    >
                      {cat.name}
                    </IonText>
                  ))}
                iconColor={'#ffffff'}
              />
            </IonRow>
            <IonRow>
              <TextIconHeader
                icon={informationCircle}
                Header={<IonText className='font-epilogue font-medium px-1'>Things to take note</IonText>}
                iconColor='#ffffff'
              />
            </IonRow>
            <IonRow className='h-[110%] overflow-y-auto overflow-x-clip items-start'>
              {remarksArr.map(remark => {
                const resource = remark.resourceId ? resources.filter(r => r.id === remark.resourceId)[0] : null;
                return (
                  <TextIconHeader
                    key={remark.id}
                    icon={caretForward}
                    iconColor='#ffffff'
                    iconStyles='ml-5'
                    Header={
                      <>
                        <IonText className='font-epilogue font-medium '>{remark.text}</IonText>
                      </>
                    }
                  >
                    {resource && <IonIcon icon={arrowForward} onClick={() => openLink(resource.link)} color='black' className='text-3xl' />}
                  </TextIconHeader>
                );
              })}
            </IonRow>
          </IonGrid>
          <BlockButton className='absolute left-2 bottom-4 w-[95%]' title='Close' onClick={onDismiss} />
        </IonContent>
      </IonModal>
    </>
  );
};

export default ItemModal;
