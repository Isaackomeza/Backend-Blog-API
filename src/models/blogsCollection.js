import { v4 as uuidv4 } from 'uuid';

var blogs = [{
    author: 'Isaac Komeza',
    title: 'How to study javascript in one day',
    description: 'For sure you can not fjesb cfewhsbjvbfjvabijvbsjvfbjwbnsfjnbwobhsonw',
  },
  {
    author: 'Komeza',
    title: 'How to study html in one day',
    description: 'For sure you can not fjesb cfewhsbjvbfjvabijvbsjvfbjwbnsfjnbwobhsonw',
  },
];
blogs=blogs.map((blog)=>({id:uuidv4(), ...blog}));
export default blogs;