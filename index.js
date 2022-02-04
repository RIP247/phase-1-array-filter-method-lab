// Code your solution here
// function findMatching(drives) {
//     for (let name of drives) {
//         if( strin)
//     }
// }

// function UpperCase(drivers) {
//     return drives[name]
// }




// const findMatching = drivers.filter(drive => driver === n


  


function findMatching(array, name) { 
     return array.filter(drivers => drivers.toLowerCase() === name.toLowerCase()) 
     
}
// console.log(findMatching(driver));

// const fuzzyMatch = drivers.filter((name) => name.startsWith(""));

function fuzzyMatch(array,name) {
    return array.filter(drivers => drivers.startsWith(name));
}

function matchName (array,name, hometown) {
    return array.filter(drivers => (drivers.name = name) ? name : hometown)
}


