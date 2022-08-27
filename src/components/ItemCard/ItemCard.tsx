import { IonCard, IonCardContent, IonCardHeader, IonGrid, IonRow, IonText, IonCol } from '@ionic/react';
import React from 'react';
import { Item } from '@/models/items/items';
import TextIconHeader from '../textIconHeader';
import { pricetag, checkmarkCircle, closeCircle, time } from 'ionicons/icons';
import { Category } from '@/models/categories/categories';
import { Resources } from '@/models/resources/resources';
import { toggleShowModal, updateItem } from '@/store/item/itemSlice';
import { useDispatch } from 'react-redux';

import './main.css';

type Props = {
  item?: Item;
  resource?: Resources;
  timeString?: string;
  categoryArr: Category[];
  onClick?: () => void;
  className?: string;
  img?: string;
};

const ItemCard = ({ item, resource, categoryArr, onClick, className, timeString, img }: Props) => {
  const object = item ?? resource;
  const dispatch = useDispatch();

  const displayModal = () => {
    item && dispatch(updateItem(item));
    dispatch(toggleShowModal());
  };

  return (
    <IonCard onClick={() => (onClick ? onClick() : displayModal())} className={`rounded-xl p-0 m-2 bg-white ${className}`} color='black'>
      <IonGrid className='w-full border p-0'>
        <IonRow className='p-0'>
          {img && (
            <IonCol className='p-0' size='3'>
              <img src={img} className='w-full h-full object-cover object-center' />
            </IonCol>
          )}
          <IonCol size='w-full'>
            <IonGrid className='p-0'>
              <IonRow>
                <IonCardHeader className='pl-3 pb-0 pt-1 w-full'>
                  <IonText className='not-italic font-semibold text-lg text-black font-epilogue'>{object?.name}</IonText>
                </IonCardHeader>
              </IonRow>
              <IonCardContent className='p-0 pl-2'>
                <TextIconHeader
                  icon={pricetag}
                  iconStyles='pr-3 text-lg'
                  Header={categoryArr.map(cat => (
                    <IonText
                      key={cat.id}
                      className={`font-epilogue font-medium py-0.5 px-2 mr-1 rounded-xl`}
                      style={{ backgroundColor: cat.color }}
                    >
                      {cat.name}
                    </IonText>
                  ))}
                  iconColor={'#ffffff'}
                />
                {timeString && item && (
                  <TextIconHeader
                    icon={time}
                    iconStyles='text-2xl pr-0'
                    Header={<IonText className='font-epilogue font-medium px-2'>{timeString}</IonText>}
                    iconColor='dark'
                  />
                )}
                {item && (
                  <TextIconHeader
                    icon={item.isRecyclable ? checkmarkCircle : closeCircle}
                    iconStyles='text-2xl p-0 pr-2'
                    Header={<IonText className='font-epilogue font-small'>{item.isRecyclable ? 'Recyclable' : 'Not Recyclable'}</IonText>}
                    iconColor={item.isRecyclable ? 'success' : 'danger'}
                  />
                )}
              </IonCardContent>
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default ItemCard;
