import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Paopao',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'David',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'iPhone 14 Promax',
      slug: 'ip-14-pm',
      category: 'iPhone',
      image: '/images/iPhone/ip-14-pm.jpg',
      price: 44900,
      countInStock: 20,
      description: 'A magical new way to interact with iPhone',
    },
    {
      // _id: '2',
      name: 'iPad Pro M2',
      slug: 'ipd-m2',
      category: 'iPad',
      image: '/images/iPad/ipd-pro-m2.jpg',
      price: 32900,
      countInStock: 20,
      description: 'M2 chip Next-generation performance',
    },
    {
      // _id: '3',
      name: 'Watch Series 8',
      slug: 'w-8',
      category: 'Watch',
      image: '/images/Watch/w-8.jpg',
      price: 16900,
      countInStock: 50,
      description: 'A healthy leap ahead',
    },
    {
      // _id: '4',
      name: 'Macbook Pro M2',
      slug: 'mb-p-m2',
      category: 'Mac',
      image: '/images/Mac/mbp-m2.jpg',
      price: 46900,
      countInStock: 20,
      description: 'A healthy leap ahead',
    },
  ],
};

export default data;
