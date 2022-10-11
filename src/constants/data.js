import images from './images';

const tea = [
  {
    title: ' Purple tea',
    price: '$56',
    tags: 'Pleasant | Sweet | Woodsy',
  },
  {
    title: 'Rooibos Tea',
    price: '$59',
    tags: 'Sweet| Smooth | Earthy',
  },
  {
    title: 'Green tea',
    price: '$44',
    tags: 'Vegetal/Grassy | Earthy | Bright',
  },
  {
    title: 'Black tea',
    price: '$31',
    tags: 'Malty | Full-bodied | Strong',
  },
  {
    title: 'White Tea',
    price: '$76',
    tags: 'Floral  | Delicate | Fruity',
  },
];

const coffees = [
  {
    title: 'Latte',
    price: '$20',
    tags: 'Espresso | Steamed Milk',
  },
  {
    title: "Cappuccino",
    price: '$16',
    tags: 'Espresso | Steamed Milk | Foam',
  },
  {
    title: 'Americano',
    price: '$10',
    tags: 'Espresso | Hot Water',
  },
  {
    title: 'Cortado',
    price: '$31',
    tags: '1oz Espresso | 1oz Steamed Milk',
  },
  {
    title: 'Red Eye',
    price: '$66',
    tags: 'Coffee | Espresso ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { tea, coffees, awards };
