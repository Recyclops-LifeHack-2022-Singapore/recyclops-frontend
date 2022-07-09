import { IonCard, IonCardContent, IonCardHeader, IonGrid, IonRow, IonText, IonCol } from '@ionic/react';
import React from 'react';
import { Item } from '@/models/items/items';
import TextIconHeader from '../textIconHeader';
import { pricetag, checkmarkCircle, closeCircle, time } from 'ionicons/icons';
import { Category } from '@/models/categories/categories';
import { Resources } from '@/models/resources/resources';
import { toggleShowModal, updateItem } from '@/store/item/itemSlice';
import { useDispatch } from 'react-redux';

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
    <IonCard onClick={() => (onClick ? onClick() : displayModal())} className={`rounded-xl p-0 bg-white ${className}`} color='black'>
      <IonGrid className='w-full border p-0'>
        <IonRow className='p-0'>
          {img && (
            <IonCol className='p-0' size='3'>
              <img src={img} className='w-full h-full object-cover object-center' />
            </IonCol>
          )}
          <IonCol size='9'>
            <IonGrid className='p-0'>
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
                    iconStyles='text-2xl pr-0'
                    Header={
                      <IonText className='font-epilogue font-medium px-2'>{item.isRecyclable ? 'Recyclable' : 'Not Recyclable'}</IonText>
                    }
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
