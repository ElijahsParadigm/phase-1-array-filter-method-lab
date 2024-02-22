// Code your solution here
// function findMatching(collection, attribute){
//     const matchingDrivers =[];
//     for (const user of collection){
//         // const param1 = collection[user].toLowerCase();
//         // const param2 = attribute.toLowerCase();
//         if (user === attribute){
//             matchingDrivers.push(user)
//         }
//     }
//     return matchingDrivers
// }

function findMatching(collection, attribute){
    return collection.filter(function(collection){
        return collection.toLowerCase() === attribute.toLowerCase()
    })
}

function fuzzyMatch(collection, attribute){
    return collection.filter(function(collection){
        return collection.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase()
    })
}

function matchName(collection, attribute){
    return collection.filter(function(user){
        return user.name === attribute
    })
}