import users from './uaers.js'

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color) 
console.log(getUsersWithEyeColor(users, 'green'));