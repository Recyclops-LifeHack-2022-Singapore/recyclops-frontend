import React, { useState } from 'react';

import { IonRow, IonGrid, IonAlert } from '@ionic/react';

import PageWithGrid from '@/components/PageWithGrid';
import ItemCard from '@components/ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { setHistory } from '@/store/history/historySlice';
import { getCurrentHistory } from '@/store/history/historySlice';
import { toggleShowModal, updateItem } from '@/store/item/itemSlice';
import { items } from '@/models/items/items';
import { categories } from '@/models/categories/categories';
import { Storage } from '@capacitor/storage';
import BlockButton from '@/components/BlockButton';

const History = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const currentHistory = useSelector(getCurrentHistory);
  const dispatch = useDispatch();

  const clearHistoryHandler = async () => {
    await Storage.set({ key: 'history', value: '' });
    dispatch(setHistory(null));
  };

  return (
    <PageWithGrid toolbarTitle='History'>
      <IonAlert
        mode='ios'
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header='Clear History'
        subHeader='Are you sure you want to clear your history?'
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              setShowAlert(false);
            },
          },
          {
            text: 'Yes',
            role: 'confirm',
            handler: () => {
              clearHistoryHandler();
            },
          },
        ]}
      />
      <IonRow className='pl-5 h-[5%] items-end'>
        <h1 className='font-semibold text-2xl'>History</h1>
      </IonRow>
      <IonRow className='h-[80%] overflow-y-auto'>
        <IonGrid>
          {(!currentHistory || currentHistory.length === 0) && (
            <h1 className='pl-3.5 pt-3 font-epilogue'>No History, take a photo to add one!</h1>
          )}
          {currentHistory &&
            currentHistory.map(history => {
              const item = items.find(item => item.id === history.itemId);
              const openModal = () => {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                dispatch(updateItem(item!));
                dispatch(toggleShowModal());
              };
              return (
                <ItemCard
                  onClick={openModal}
                  className='mt-0'
                  key={history.id}
                  item={item}
                  categoryArr={categories.filter(category => category.id === item?.categoryId)}
                  timeString={history.timeStamp}
                  img={history.base64}
                />
              );
            })}
        </IonGrid>
      </IonRow>
      <IonRow className='h[10%] px-5'>
        <BlockButton color='danger' title='Clear History' onClick={() => setShowAlert(true)} />
      </IonRow>
    </PageWithGrid>
  );
};

export default History;
