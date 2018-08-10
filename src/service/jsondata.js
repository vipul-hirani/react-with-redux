import m1 from '../assets/images/m1.jpg';
import m2 from '../assets/images/m2.jpg';
import m3 from '../assets/images/m3.jpg';
import m4 from '../assets/images/m4.jpg';
import m5 from '../assets/images/m5.jpg';
import m6 from '../assets/images/m7.jpg';
import m7 from '../assets/images/m6.jpg';
import m8 from '../assets/images/m8.jpg';
import m9 from '../assets/images/m9.png';
import m10 from '../assets/images/m10.jpg';
import m11 from '../assets/images/m11.jpg';
import w1 from '../assets/images/w1.jpg';
import w2 from '../assets/images/w2.jpg';
import w4 from '../assets/images/w4.jpg';
import w5 from '../assets/images/w5.jpg';
import w6 from '../assets/images/w6.jpg';
import w7 from '../assets/images/w7.jpg';
import w8 from '../assets/images/w8.jpg';
import w9 from '../assets/images/w9.jpg';
import w11 from '../assets/images/w11.jpg';
import w12 from '../assets/images/w12.jpg';
import w13 from '../assets/images/w13.jpg';
import w14 from '../assets/images/w14.jpg';
import b1 from '../assets/images/b1.jpg';
import b2 from '../assets/images/b2.jpg';
import b3 from '../assets/images/b3.jpg';
import b4 from '../assets/images/b4.jpg';
import b5 from '../assets/images/b5.jpg';
import b6 from '../assets/images/b6.jpg';
import b7 from '../assets/images/b7.jpg';
import b8 from '../assets/images/b8.jpg';
import s1 from '../assets/images/s1.jpg';
import s2 from '../assets/images/s2.jpg';
import s3 from '../assets/images/s3.jpg';
import s4 from '../assets/images/s4.jpg';
import s5 from '../assets/images/s5.jpg';
import s6 from '../assets/images/s6.jpg';


const state = {
  manData: {
    filter: {
      size: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL']
    },
    data: [
      {
        id: 1,
        image: m1,
        title: 'Black Single T-Shirt',
        price: 455.99,
        discount_price: 699.79,
        size: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
        qty: 1
      },
      {
        id: 2,
        image: m2,
        title: 'Black Refugees T-Shirt',
        price: 800.99,
        discount_price: 999.79,
        size: ['XS', 'S', 'M', 'ML'],
        qty: 1
      },
      {
        id: 3,
        image: m3,
        title: 'Game Rang T-Shirt',
        price: 509.99,
        discount_price: 899.79,
        size: ['XS', 'S', 'M'],
        qty: 1
      },
      {
        id: 4,
        image: m4,
        title: 'Round Neck Black T-Shirt',
        price: 199.99,
        discount_price: 259.79,
        size: ['ML', 'L', 'XL'],
        qty: 1
      },
      {
        id: 5,
        image: m5,
        title: "Food Blue T-Shirt",
        price: 999.99,
        discount_price: 1509.79,
        size: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
        qty: 1
      },
      {
        id: 6,
        image: m6,
        title: "Sky Blue Shirt",
        price: 559.99,
        discount_price: 759.79,
        size: ['XL', 'XXL'],
        qty: 1
      },
      {
        id: 7,
        image: m7,
        title: "Round Neck Black T-Shirt",
        price: 500.99,
        discount_price: 700.79,
        size: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
        qty: 1

      },
      {
        id: 8,
        image: m8,
        title: "Dark Blue T-Shirt",
        price: 860.99,
        discount_price: 1259.79,
        size: ['XS', 'S', 'M', 'ML'],
        qty: 1
      },
      {
        id: 9,
        image: m9,
        title: "Full sleeve T-Shirt",
        price: 688.99,
        discount_price: 789.79,
        size: ['M', 'ML'],
        qty: 1
      },
      {
        id: 10,
        image: m10,
        title: "Light Blue T-Shirt",
        price: 90,
        discount_price: 129.79,
        size: ['XS', 'M', 'ML'],
        qty: 1
      },
      {
        id: 11,
        image: m11,
        title: "Slogan T-Shirt",
        price: 449.99,
        discount_price: 599.79,
        size: ['XS', 'S', 'ML'],
        qty: 1
      }
    ]
  },
  bagsData: {
    filter: {
      size: ['Travel', 'Laptop', 'Briefcase', 'Hand']
    },
    data: [
      {
        id: 12,
        image: b1,
        title: 'Laptop Messenger Bag',
        price: 840.99,
        discount_price: 1069.79,
        qty: 1,
        size: ['Briefcase']
      },
      {
        id: 13,
        image: b2,
        title: 'Puma Backpack',
        price: 655.99,
        discount_price: 869.79,
        qty: 1,
        size: ['Laptop']
      },
      {
        id: 14,
        image: b3,
        title: 'Laptop Backpack',
        price: 800.99,
        discount_price: 899.79,
        qty: 1,
        size: ['Laptop']
      },
      {
        id: 15,
        image: b4,
        title: 'Travel Duffel Bag',
        price: 999.99,
        discount_price: 1599.79,
        qty: 1,
        size: ['Travel']
      },
      {
        id: 16,
        image: b5,
        title: "Hand-held Bag",
        price: 499.99,
        discount_price: 559.79,
        qty: 1,
        size: ['Hand']
      },
      {
        id: 17,
        image: b6,
        title: "Butterflies Bag",
        price: 255.99,
        discount_price: 459.79,
        qty: 1,
        size: ['Hand']
      },
      {
        id: 18,
        image: b7,
        title: "Costa Swiss Bag",
        price: 555.99,
        discount_price: 759.79,
        qty: 1,
        size: ['Hand']
      },
      {
        id: 19,
        image: b8,
        title: "Noble Designs Bag",
        price: 555.99,
        discount_price: 859.79,
        qty: 1,
        size: ['Hand']
      },
    ]
  },
  footwearData: {
    filter: {
      size: [6, 7, 8, 9, 10, 12],
      company: ['Roadstar', 'Puma', 'Duke', 'HRX', 'Rebook', 'Nike', 'Adidas'],
      color: [{'name': 'Black', 'code': '#040404'},
        {'name': 'White', 'code': '#ffffff'},
        {'name': 'Brown', 'code': '#22120c'},
        {'name': 'Blue', 'code': '#0e346d'},
        {'name': 'Pink', 'code': '#ff88a3'}],
    },
    data: [
      {
        id: 20,
        image: s1,
        title: 'Running Shoes',
        price: 80.99,
        discount_price: 89.79,
        qty: 1,
        size: [6, 12],
        color: [{'name': 'Black', 'code': '#040404'}]
      },
      {
        id: 21,
        image: s2,
        title: 'Shoetopia Lace Up',
        price: 45.99,
        discount_price: 69.79,
        qty: 1,
        size: [9, 10, 12],
        color: [{'name': 'Black', 'code': '#040404'}, {'name': 'White', 'code': '#ffffff'}]
      },
      {
        id: 22,
        image: s3,
        title: 'Steemo Casuals(Black)',
        price: 80.99,
        discount_price: 89.79,
        qty: 1,
        size: [6, 7, 8, 12],
        color: [{'name': 'Black', 'code': '#040404'}, {'name': 'White', 'code': '#ffffff'}]
      },
      {
        id: 23,
        image: s4,
        title: 'Benetton Flip Flops',
        price: 199.99,
        discount_price: 159.79,
        qty: 1,
        size: [6, 7, 8, 9],
        color: {'name': 'Pink', 'code': '#ff88a3'}
      },
      {
        id: 24,
        image: s5,
        title: "Moonwalk Bellies",
        price: 100.99,
        discount_price: 119.79,
        qty: 1,
        size: [6, 7, 8, 12],
        color: [{'name': 'White', 'code': '#ffffff'}, {'name': 'Pink', 'code': '#ff88a3'}]
      },
      {
        id: 25,
        image: s6,
        title: "Aero Canvas Loafers",
        price: 400,
        discount_price: 555,
        qty: 1,
        size: [6, 7, 10, 12],
        color: [{'name': 'Blue', 'code': '#0e346d'}]
      },
    ]
  },
  womanData: {
    filter: {
      size: ['High Low', 'Tail Cut', 'Flared', 'Front Slit']
    },
    data: [
      {
        id: 26,
        image: w1,
        title: "club fashion Blue Cotton A-line Kurti",
        price: 560.99,
        discount_price: 1230.79,
        qty: 1,
        size: ['High Low']
      },
      {
        id: 27,
        image: w2,
        title: "ZIYAA Black Crepe Straight Kurti",
        price: 360.99,
        discount_price: 955.79,
        size: ['Tail Cut'],
        qty: 1
      },

      {
        id: 29,
        image: w4,
        title: "Marino Wools Black Cotton Front Slit Kurti",
        price: 560.99,
        discount_price: 891.79,
        size: ['Flared'],
        qty: 1
      },
      {
        id: 30,
        image: w5,
        title: "shree bebo Maroon Rayon Front Slit Kurti",
        price: 860.99,
        discount_price: 1999.79,
        size: ['Front Slit'],
        qty: 1
      },
      {
        id: 31,
        image: w6,
        title: "Beamish Pink Crepe Straight Kurti",
        price: 860.99,
        discount_price: 1150.79,
        size: ['Flared'],
        qty: 1
      },
      {
        id: 32,
        image: w7,
        title: "Fashion2wear Black Crepe Straight Kurti",
        price: 190.99,
        discount_price: 350.79,
        size: ['XXL'],
        qty: 1
      },
      {
        id: 33,
        image: w8,
        title: "Plus Creation Multicoloured Crepe Straight Kurti",
        price: 430.99,
        discount_price: 650.79,
        size: ['Flared'],
        qty: 1
      },
      {
        id: 34,
        image: w9,
        title: "Plus Creations Red Viscose Straight Kurti",
        price: 730.99,
        discount_price: 950.79,
        size: ['Tail Cut'],
        qty: 1
      },
      {
        id: 36,
        image: w11,
        title: "shree wow Black Crepe Straight Kurti",
        price: 1300.99,
        discount_price: 1500.79,
        size: ['High Low'],
        qty: 1
      },
      {
        id: 37,
        image: w12,
        title: "Kvsfab Blue Denim Straight Kurti",
        price: 1399.99,
        discount_price: 1999.99,
        size: ['Flared'],
        qty: 1
      },
      {
        id: 38,
        image: w13,
        title: "Janasya Turquoise Crepe A-line Kurti",
        price: 230.99,
        discount_price: 350.79,
        size: ['Tail Cut'],
        qty: 1
      },
      {
        id: 39,
        image: w14,
        title: "Vbuyz White Cotton Front Slit Kurti",
        price: 430.99,
        discount_price: 650.79,
        size: ['Flared'],
        qty: 1
      }
    ]
  }
};

export default state;

