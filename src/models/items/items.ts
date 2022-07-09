export interface Item {
  id: number;
  name: string;
  isRecyclable: boolean;
}

export const items: Item[] = [
  {
    id: 1,
    name: 'CardBoard Box / Carton Box',
    isRecyclable: true,
  },
];
