const { User } = require('../models');

const userData = [
    {
        username: "jeff_bezos",
        twitter: "JeffBezos",
        github: "",
        email: "jeff_bezos@email.com",
        password: "P@ssword1"
     },
     {
         username: "elon_musk",
         twitter: "elonmusk",
         github: "",
         email: "elonmusk@email.com",
         password: "P@ssword2"
     },
     {
         username: "mark_zuck",
         twitter: "finkd",
         github: "",
         email:"markzuckerberg@email.com",
         password: "P@ssword3"
     },
     {
         username: "jack_dorsey",
         twitter: "jack",
         github: "",
         email: "jackdorsey@email.com",
         password: "P@ssword4"
     },
     {
         username: "tim_cook",
         twitter: "tim_cook",
         github: "",
         email: "timcook@email.com",
         password: "P@ssword5"
     },
     {
         username: "bobby_burke",
         twitter: "",
         github: "",
         email: "bobbybruke0@gmail.com",
         password: "P@ssword6"
     },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;