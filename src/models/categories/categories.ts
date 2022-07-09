export interface Category {
  id: number;
  name: string;
  color: string;
}

export const link: Category[] = [
  {
    id: 1,
    name: 'Link',
    color: '#A8E1E1',
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: 'Paper',
    color: '#FEA656',
  },
  {
    id: 2,
    name: 'Plastic',
    color: '#3ac9fc',
  },
  {
    id: 3,
    name: 'Glass',
    color: '#9c9a9a',
  },
  {
    id: 4,
    name: 'Metal',
    color: '#b780ff',
  },
  {
    id: 5,
    name: 'Others',
    color: '#92fa87',
  },
];
