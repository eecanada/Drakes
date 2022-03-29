import camelcoat from '../assets/images/camelcoat.jpg';
import sweater from '../assets/images/greensweater.jpg';
import poplinShirt from '../assets/images/redpoplinshirt.jpg';
import trousers from '../assets/images/wooltrousers.jpg';

const favorites = [
  {
    _id: '1',
    title: 'Camel Wool Polo Coat',
    link: '/',
    img: camelcoat,
    price: 2295,
    currency: '$',
  },
  {
    _id: '2',
    title: 'Green Chain-Stitched Cotton Sweatshirt',
    link: '/',
    img: sweater,
    price: 205,
    currency: '$',
  },
  {
    _id: '2',
    title: 'Red Narrow Stripe Button Down Poplin Shirt',
    link: '/',
    img: poplinShirt,
    price: 255,
    currency: '$',
  },
  {
    _id: '4',
    title: 'Grey Wool Flannel Flat Front Trouser',
    link: '/',
    img: trousers,
    price: 535,
    currency: '$',
  },
];

export function getFavorites() {
  return favorites;
}
