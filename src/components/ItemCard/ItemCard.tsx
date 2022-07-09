import { IonCard, IonCardContent, IonCardHeader, IonGrid, IonRow, IonText } from '@ionic/react';
import React from 'react';
import { Item } from '@/models/items/items';
import TextIconHeader from '../TextIconHeader';
import { pricetag, checkmarkCircle } from 'ionicons/icons';
import { Category } from '@/models/categories/categories';
import { Resources } from '@/models/resources/resources';

type Props = {
  item?: Item;
  resource?: Resources;
  categoryArr: Category[];
  onClick?: () => void;
  className?: string;
};

const ItemCard = ({ item, resource, categoryArr, onClick, className }: Props) => {
  const object = item ?? resource;
  return (
    <IonCard onClick={onClick} className={`rounded-xl bg-white ${className}`} color='black'>
      <IonGrid>
        <IonRow>
          <IonCardHeader className='pl-3 pb-0 pt-2'>
            <IonText className='not-italic font-semibold text-xl text-black font-epilogue'>{object?.name}</IonText>
          </IonCardHeader>
        </IonRow>
        <IonCardContent className='pt-0 p-3 pb-0 '>
          <TextIconHeader
            icon={pricetag}
            Header={categoryArr.map(cat => (
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
          {item && (
            <TextIconHeader
              icon={checkmarkCircle}
              iconStyles='text-2xl pr-0'
              Header={<IonText className='font-epilogue font-medium px-2'>{item.isRecyclable ? 'Recyclable' : 'Not Recyclable'}</IonText>}
              iconColor={'success'}
            />
          )}
        </IonCardContent>
      </IonGrid>
    </IonCard>
  );
};

export default ItemCard;
