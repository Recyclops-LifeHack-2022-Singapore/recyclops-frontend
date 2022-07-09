import React from 'react';

import { IonRow, IonGrid } from '@ionic/react';

import PageWithGrid from '@/components/PageWithGrid';
import ItemCard from '@components/ItemCard';
import { useSelector } from 'react-redux';
import { getCurrentHistory } from '@/store/history/historySlice';
import { items } from '@/models/items/items';
import { categories } from '@/models/categories/categories';

const History = () => {
  const currentHistory = useSelector(getCurrentHistory);
  return (
    <PageWithGrid>
      <IonRow className='pl-5 h-[10%] items-end'>
        <h1 className='font-semibold text-2xl'>History</h1>
      </IonRow>
      <IonRow className='h-[90%] overflow-y-auto'>
        <IonGrid>
          {currentHistory &&
            currentHistory.map(history => (
              <ItemCard
                key={history.id}
                item={items[0]}
                categoryArr={[categories[0]]}
                timeString={history.timeStamp}
                img={history.base64}
              />
            ))}
        </IonGrid>
      </IonRow>
    </PageWithGrid>
  );
};

export default History;
