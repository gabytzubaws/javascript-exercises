let findTheOldest = function(people) { // people is an array of objects!
    const oldest = people.reduce(function(prevOldest, current){
        const prevOldestAge = getAge(prevOldest.yearOfBirth, prevOldest.yearOfDeath);
        const currentAge = (current.yearOfBirth, current.yearOfDeath);
        return prevOldestAge > currentAge ? prevOldest : current; // returns objects!
    });
    return oldest;
};

const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

module.exports = findTheOldest
