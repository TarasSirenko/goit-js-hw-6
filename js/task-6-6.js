import users from './uaers.js' 

const getUsersWithAge = (users, min, max) => users.filter(user => min < user.age && user.age < max)

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));