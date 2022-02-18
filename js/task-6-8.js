import users from './uaers.js' 

// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.map(friend => friend === friendName ? users.name : user.age ))

// const getUsersWithFriend = (users, friendName)
// console.log(getUsersWithFriend(users, 'Briana Decker'));

// const x = users.map(function (user) {
//     // console.log(user.friends);
//     user.friends.map(function (friend) {
//         console.log(friend);
//     })
// })


const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName)).map(user => user.name)
console.log(getUsersWithFriend(users, 'Briana Decker'));

console.log(getUsersWithFriend(users, 'Goldie Gentry'));