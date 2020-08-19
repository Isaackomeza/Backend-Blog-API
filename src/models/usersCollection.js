import { v4 as uuidv4 } from 'uuid';

var users = [{
    username: 'isaackomeza',
    email:'isaackomeza@gmail.com',
    password:'password',
    role:'admin'
},
{
    username: 'jpirumva',
    email:'jp.irumva@gmail.com',
    password:'123456',
    role:'user'
},
];
users=users.map((user)=>({id:uuidv4(), ...user}));
export default users;