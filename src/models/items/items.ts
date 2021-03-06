export interface Item {
  id: number;
  name: string;
  isRecyclable: boolean;
  ml_id?: string;
  categoryId: number;
}

export const items: Item[] = [
  {
    id: 1,
    name: 'Printed paper',
    isRecyclable: true,
    ml_id: 'paper',
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Writing paper',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 3,
    name: 'Newspaper',
    isRecyclable: true,
    ml_id: 'newspaper',
    categoryId: 1,
  },
  {
    id: 4,
    name: 'Flyer',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 5,
    name: 'Brochure',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 6,
    name: 'Magazine',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 7,
    name: 'Books / Textbooks',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 8,
    name: 'Envelope',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 9,
    name: 'Red Packet',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 10,
    name: 'Gift Wrapping Paper',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 11,
    name: 'Shredded Paper',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 12,
    name: 'Paper Receipt',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 13,
    name: 'Cardboard Box / Carton Box',
    isRecyclable: true,
    ml_id: 'cardboard',
    categoryId: 1,
  },
  {
    id: 14,
    name: 'Paper Box / Packaging',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 15,
    name: 'Egg Tray',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 16,
    name: 'Beverage Carton (Milk, Juice, Drink)',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 17,
    name: 'Toilet Roll Tube',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 18,
    name: 'Tissue Box',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 19,
    name: 'Paper bag',
    isRecyclable: true,
    categoryId: 1,
  },
  {
    id: 20,
    name: 'Paper Disposable (Cups/Plates)',
    isRecyclable: false,
    categoryId: 1,
  },
  {
    id: 21,
    name: 'Paper Towel, Tissue Paper',
    isRecyclable: false,
    ml_id: 'paper_towel',
    categoryId: 1,
  },
  {
    id: 22,
    name: 'Toilet Paper',
    isRecyclable: false,
    categoryId: 1,
  },
  {
    id: 23,
    name: 'Wooden Chopsticks',
    isRecyclable: false,
    ml_id: 'chopsticks_food',
    categoryId: 1,
  },
  {
    id: 24,
    name: 'Pizza Boxes',
    isRecyclable: false,
    categoryId: 1,
  },
  {
    id: 25,
    name: 'Wax Paper',
    isRecyclable: false,
    categoryId: 1,
  },
  {
    id: 26,
    name: 'Paper packaging with food',
    isRecyclable: false,
    ml_id: 'paper_bowl_food',
    categoryId: 1,
  },
  {
    id: 27,
    name: 'Plastic Bottle/Container (Food/Beverage)',
    isRecyclable: true,
    ml_id: 'plastic_bottle',
    categoryId: 2,
  },
  {
    id: 28,
    name: 'Plastic Bottle/Container (Non-food)',
    isRecyclable: true,
    categoryId: 2,
  },
  {
    id: 29,
    name: 'CD/DVD Casing',
    isRecyclable: true,
    categoryId: 2,
  },
  {
    id: 30,
    name: 'Plastic Bag / Packaging',
    isRecyclable: true,
    ml_id: 'plastic_bag',
    categoryId: 2,
  },
  {
    id: 31,
    name: 'Plastic Film',
    isRecyclable: true,
    categoryId: 2,
  },
  {
    id: 32,
    name: 'Plastic Clothes Hanger',
    isRecyclable: true,
    categoryId: 2,
  },
  {
    id: 33,
    name: 'Plastic Takeaway Food Container/Cup',
    isRecyclable: true,
    categoryId: 2,
  },
  {
    id: 34,
    name: 'Polystyrene foam product (Styrofoam Cup)',
    isRecyclable: false,
    categoryId: 2,
  },
  {
    id: 35,
    name: 'Plastic Disposables (Cutlery/Straw) ',
    isRecyclable: false,
    ml_id: 'plastic_utensils_food',
    categoryId: 2,
  },
  {
    id: 36,
    name: 'Plastic Packaging with foil',
    isRecyclable: false,
    categoryId: 2,
  },
  {
    id: 37,
    name: 'Oxo- and Bio-Degradable bags',
    isRecyclable: false,
    categoryId: 2,
  },
  {
    id: 38,
    name: 'Plastic Packaging with food',
    isRecyclable: false,
    ml_id: 'plastic_packaging_food',
    categoryId: 2,
  },
  {
    id: 39,
    name: 'Beverage Glass Bottle',
    isRecyclable: true,
    ml_id: 'glass',
    categoryId: 3,
  },
  {
    id: 40,
    name: 'Food Glass Bottle',
    isRecyclable: true,
    categoryId: 3,
  },
  {
    id: 41,
    name: 'Cosmetic/Perfume Glass Bottle',
    isRecyclable: true,
    categoryId: 3,
  },
  {
    id: 42,
    name: 'Medicine and Supplement Glass Bottle',
    isRecyclable: true,
    categoryId: 3,
  },
  {
    id: 43,
    name: 'Glassware (Cup/Plate/Glass)',
    isRecyclable: true,
    categoryId: 3,
  },
  {
    id: 44,
    name: 'Tempered Glass, Crystal Glass',
    isRecyclable: false,
    categoryId: 3,
  },
  {
    id: 45,
    name: 'Windows',
    isRecyclable: false,
    categoryId: 3,
  },
  {
    id: 46,
    name: 'Mirrors',
    isRecyclable: false,
    categoryId: 3,
  },
  {
    id: 47,
    name: 'Ceramic Products (Plate/Porcelain)',
    isRecyclable: false,
    categoryId: 3,
  },
  {
    id: 48,
    name: 'Light Bulbs (Lamp/LED)',
    isRecyclable: false,
    categoryId: 3,
  },
  {
    id: 49,
    name: 'Beverage Metal Can',
    isRecyclable: true,
    ml_id: 'aluminium_can',
    categoryId: 4,
  },
  {
    id: 50,
    name: 'Food Metal Can',
    isRecyclable: true,
    categoryId: 4,
  },
  {
    id: 51,
    name: 'Metal Bottle Cap',
    isRecyclable: true,
    categoryId: 4,
  },
  {
    id: 52,
    name: 'Clean Aluminium Tray and Foil',
    isRecyclable: true,
    categoryId: 4,
  },
  {
    id: 53,
    name: 'Non-food Metal Container (Paint Cans)',
    isRecyclable: true,
    categoryId: 4,
  },
  {
    id: 54,
    name: 'Rusty Metal Cans, Dirty Aluminium Foil/Tray',
    isRecyclable: false,
    categoryId: 4,
  },
  {
    id: 55,
    name: 'Metal Cutlery, Steel wool, Metal accessories',
    isRecyclable: false,
    categoryId: 4,
  },
  {
    id: 56,
    name: 'Desktop Computer, Laptop, Tablet, Mobile Phones, Monitors',
    isRecyclable: true,
    categoryId: 5,
  },
  {
    id: 57,
    name: 'Computer Battery, Mobile Phone battery, Battery Charger, Portable Charger',
    isRecyclable: true,
    categoryId: 5,
  },
  {
    id: 58,
    name: 'Printer, Modem, Router, Hard Disk, Keyboard, Mouse',
    isRecyclable: true,
    categoryId: 5,
  },
  {
    id: 59,
    name: 'Electronic Waste (Used mobile phone, laptop)',
    isRecyclable: true,
    ml_id: 'e-waste',
    categoryId: 5,
  },
  {
    id: 60,
    name: 'Household Battery, Alkaline Battery, Rechargable Battery',
    isRecyclable: true,
    ml_id: 'battery',
    categoryId: 5,
  },
  {
    id: 61,
    name: 'Refrigerators, Washing Machine, Television, Air Conditioner, PMDs',
    isRecyclable: true,
    categoryId: 5,
  },
  {
    id: 62,
    name: 'Rice Cooker, Microwave Oven, Electric Fan, Vacuum Cleaner, Gaming Console',
    isRecyclable: true,
    categoryId: 5,
  },
  {
    id: 63,
    name: 'Clothes/Shoes/Bags in good condition',
    isRecyclable: true,
    categoryId: 5,
  },
  {
    id: 64,
    name: 'Clothes/Shoes/Bags not in good condition',
    isRecyclable: false,
    categoryId: 5,
  },
  {
    id: 65,
    name: 'Food waste, Leftover medicine',
    isRecyclable: false,
    categoryId: 5,
  },
  {
    id: 66,
    name: 'Bulky waste (Furniture, Standing fan)',
    isRecyclable: false,
    categoryId: 5,
  },
].sort((a, b) => {
  const fa = a.name.toLowerCase();
  const fb = b.name.toLowerCase();

  if (fa < fb) {
    return -1;
  } else if (fa > fb) {
    return 1;
  }
  return 0;
});
