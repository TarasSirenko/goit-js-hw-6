import users from './uaers.js' 

const getSortedUniqueSkills = users => users.reduce((allSkills, user) => {
    
    allSkills.push(...user.skills)

    const uniqueSkills = []

    allSkills.filter((skill) => {

        if (!uniqueSkills.includes(skill)) {
        uniqueSkills.push(skill)
    }
} )
    return uniqueSkills
}, []).sort()



console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
