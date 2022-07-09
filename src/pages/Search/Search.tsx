import ItemCard from '@/components/ItemCard';
import { IonPage, IonContent, IonSearchbar, SearchbarChangeEventDetail } from '@ionic/react';
import React, { useState } from 'react';
import { items } from '@/models/items/items';
import { categories } from '@/models/categories/categories';
import AppToolbar from '@/components/AppToolbar';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const onSearchTextChange = (e: CustomEvent<SearchbarChangeEventDetail>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setSearchText(e.detail.value!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setFilteredItems(items.filter(item => item.name.toLocaleLowerCase().indexOf(e.detail.value!.toLocaleLowerCase()) !== -1));
  };
  return (
    <IonPage className='bg-[#000000]'>
      <AppToolbar />
      <IonContent className='bg-[#000000]'>
        <IonSearchbar className='rounded-xl pb-0' mode='ios' value={searchText} onIonChange={onSearchTextChange} />
        {filteredItems.map(item => {
          const categoryArr = categories.filter(cat => cat.id == item.categoryId);
          return <ItemCard key={item.id} item={item} categoryArr={categoryArr} />;
        })}
      </IonContent>
    </IonPage>
  );
};

export default Search;
