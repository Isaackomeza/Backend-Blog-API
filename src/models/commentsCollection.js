import { v4 as uuidv4 } from 'uuid';

var comments = [{
    name:'Komezusenge',
    email:'komezusengeisaac@gmail.com',
    comment:'Thank you for this wonderful blog'
    },
    {
    name:'David',
    email:'david@gmail.com',
    comment:'Wao!! It is awesome blog '
    },
];
comments=comments.map((comment)=>({id:uuidv4(), ...comment}));
export default comments;