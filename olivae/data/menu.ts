export type MenuItem = {
  name: string;
  description: string;
  price: number; // AED
  signature?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'mezze',
    label: 'Mezze',
    items: [
      { name: 'Smoked Eggplant Baba', description: 'Charred eggplant, tahini, pomegranate, olive oil', price: 48, signature: true },
      { name: 'Burrata & Heirloom Tomato', description: 'Stracciatella, basil oil, aged balsamic', price: 62 },
      { name: 'Warm Marinated Olives', description: 'Citrus, rosemary, chili, garlic confit', price: 34 },
      { name: 'Hummus Beiruti', description: 'Chickpea, cumin, parsley, warm flatbread', price: 42 },
    ],
  },
  {
    id: 'sea',
    label: 'From the Sea',
    items: [
      { name: 'Whole Sea Bass', description: 'Salt-baked, fennel, lemon, Sicilian oil', price: 180, signature: true },
      { name: 'Grilled Octopus', description: 'Smoked paprika, potato, caper berries', price: 96 },
      { name: 'Prawn Saganaki', description: 'Tomato, feta, ouzo, oregano', price: 88 },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    items: [
      { name: 'Lamb Shoulder', description: 'Eight-hour braise, freekeh, mint yogurt', price: 145, signature: true },
      { name: 'Saffron Risotto', description: 'Carnaroli, aged parmesan, gold leaf', price: 110 },
      { name: 'Charred Cauliflower Steak', description: 'Tahini, dukkah, preserved lemon', price: 78 },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Pistachio Baklava', description: 'Filo, orange blossom, clotted cream', price: 52, signature: true },
      { name: 'Olive Oil Cake', description: 'Citrus, almond, mascarpone', price: 46 },
      { name: 'Dark Chocolate & Sea Salt', description: 'Ganache, hazelnut, olive oil', price: 48 },
    ],
  },
];
