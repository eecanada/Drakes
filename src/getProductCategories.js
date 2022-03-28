import coat from './assets/images/coats.jpg';
import shoes from './assets/images/shoes.jpg';
import knitwear from './assets/images/knitwear.jpg';
import suits from './assets/images/suits.jpg';
import denim from './assets/images/jeans.jpg';
import hats from './assets/images/hats.jpg';
import shirts from './assets/images/shirts.jpg';
import suede from './assets/images/suede.jpg';

const categories = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    title: 'Coats & Jackets',
    link: '/',
    img: coat,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471816',
    title: 'Shoes',
    link: '/',
    img: shoes,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471817',
    title: 'Knitwear',
    link: '/',
    img: knitwear,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471819',
    title: 'suits',
    link: '/',
    img: suits,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181a',
    title: 'Denim',
    link: '/',
    img: denim,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181b',
    title: 'Hats ',
    link: '/',
    img: hats,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181e',
    title: 'Shirts',
    link: '/',
    img: shirts,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181f',
    title: 'Suede Jackets',
    link: '/',
    img: suede,
  },
];

export function getCategories() {
  return categories;
}
