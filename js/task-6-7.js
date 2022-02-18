import users from './uaers.js' 

const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0)

console.log(calculateTotalBalance(users)); 