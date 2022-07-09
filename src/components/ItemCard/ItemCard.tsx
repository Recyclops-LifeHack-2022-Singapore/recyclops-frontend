import { IonCard, IonCardContent, IonCardHeader, IonGrid, IonRow, IonText } from '@ionic/react';
import React from 'react';
import { Item } from '@/models/items/items';
import TextIconHeader from '../textIconHeader';
import { pricetag, checkmarkCircle } from 'ionicons/icons';
import { Category } from '@/models/categories/categories';

type Props = {
  item: Item;
  categoryArr: Category[];
};

const ItemCard = ({ item, categoryArr }: Props) => {
  return (
    <IonCard className='rounded-xl bg-white' color='black'>
      <IonGrid>
        <IonRow>
          <IonCardHeader className='pl-3 pb-0 pt-2'>
            <IonText className='not-italic font-semibold text-xl text-black font-epilogue'>{item.name}</IonText>
          </IonCardHeader>
        </IonRow>
        <IonCardContent className='pt-0 p-3 pb-0 '>
          <TextIconHeader
            icon={pricetag}
            Header={categoryArr.map(cat => (
              <IonText key={cat.id} className={`font-epilogue font-medium bg-[${cat.color}] py-1 px-2 mr-1 rounded-xl`}>
                {cat.name}
              </IonText>
            ))}
            iconColor={'#ffffff'}
          />
          <TextIconHeader
            icon={checkmarkCircle}
            Header={<IonText className='font-epilogue font-medium px-2'>{item.isRecyclable ? 'Recyclable' : 'Not Recyclable'}</IonText>}
            iconColor={'success'}
          />
        </IonCardContent>
      </IonGrid>
    </IonCard>
  );
};

export default ItemCard;
