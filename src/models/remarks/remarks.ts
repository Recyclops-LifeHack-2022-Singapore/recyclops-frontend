export interface Remark {
  id: number;
  text: string;
  resourceId?: number;
}

export const remarks: Remark[] = [
  {
    id: 1,
    text: 'Glossy and Non-Glossy included',
  },
  {
    id: 2,
    text: 'With and without plastic window',
  },
  {
    id: 3,
    text: 'Donate if it is in good condition',
  },
  {
    id: 4,
    text: 'Please flattern before recycling',
  },
  {
    id: 5,
    text: 'Please empty and rinse when necessary',
  },
  {
    id: 6,
    text: 'Dispose as general waste',
  },
  {
    id: 7,
    text: 'Mineral water bottle, Soft drink bottle, Carbonated drink bottle, Milk bottle, Water bottle, Medicine bottle, etc.',
  },
  {
    id: 8,
    text: 'Shampoo, Bodywash, Facial cleanser, detergent, soap, etc.',
  },
  {
    id: 9,
    text: 'Magazine wrapper, Plastic packaging for packet drink, Bubble Wrap, Fruit Box, Ziplock Bag',
  },
  {
    id: 10,
    text: 'Please empty contents',
  },
  {
    id: 11,
    text: 'Potato chip bags, Empty blister packs, expired credit cards, etc.',
  },
  {
    id: 12,
    text: 'Packagings that are contaminated with food/oil stains',
  },
  {
    id: 13,
    text: 'Beer bottle, Wine bottle, Liquor Bottle, etc.',
  },
  {
    id: 14,
    text: 'Sauce and Condiment bottle, Jam spread bottle, Food jar, etc.',
  },
  {
    id: 15,
    text: 'Drinking glass, Wine glass, etc.',
  },
  {
    id: 16,
    text: 'Can be recycled at specific collection points',
    resourceId: 6,
  },
  {
    id: 17,
    text: 'Carbonated drink can, Soft drink can, Beer can',
  },
  {
    id: 18,
    text: 'Rusted metals should be disposed as general waste',
  },
  {
    id: 19,
    text: 'Biscuit and Food tin, Metal containers',
  },
  {
    id: 20,
    text: 'Make sure that they are completely metal',
  },
  {
    id: 21,
    text: 'Can be recycled at e-waste collection points here',
    resourceId: 7,
  },
  {
    id: 22,
    text: 'Bulky item removal service by TCs for HDB residents',
  },
  {
    id: 23,
    text: 'E-waste collection drive (Quarterly)',
  },
  {
    id: 24,
    text: 'Doorstep collection (fees may apply)',
  },
  {
    id: 25,
    text: 'To find out where you can recycle your e-waste, visit here.',
    resourceId: 7,
  },
  {
    id: 26,
    text: 'E-waste bins (non-ALBA)* (items must fit the opening of bins)',
  },
  {
    id: 27,
    text: 'Cash-for-Trash stations organised by Public Waste Collectors (please contact your PWCs to check that they are able to accept the e-waste)',
  },
  {
    id: 28,
    text: 'Contact Town council to remove from your residential premises',
  },
];
