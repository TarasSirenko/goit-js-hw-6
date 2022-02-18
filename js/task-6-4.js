import users from './uaers.js'

const getInactiveUsers = users => users.filter(user => !user.isActive)

console.log(getInactiveUsers(users));