import users from './uaers.js'

// console.log(users);

// const getUserNames = users.map(function (user) {
//     return user.name;
// })

const getUserNames = users => users.map(user => user.name)

console.log(getUserNames(users));