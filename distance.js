/* A code that allows save the KMs on an array */


/* Array that will contain the data of kilometers achived */
const distanceAchieved = [];

function addDistance (km) {
    distanceAchieved.push(km);
}

addDistance(1.96);
addDistance(1.94);
addDistance(2);
addDistance(2.32);
addDistance(2.2);
addDistance(2.25);
addDistance(2.17);
addDistance(2.71);
addDistance(2.61);
addDistance(3.18);
addDistance(3.24);
addDistance(3.27);
addDistance(3.64);
addDistance(3.39);
addDistance(3.42);
addDistance(4.06);
addDistance(3.91);
addDistance(4.15);
addDistance(4.77);


console.log(distanceAchieved);

function sumOfKm (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++){
    sum += array[i];
    }
    return sum;
}

const totalDistance = "Distancia total recorrida " + sumOfKm(distanceAchieved);

console.log(totalDistance);

function perWeek(distanceAchieved, week) { //Function that separates and calculate the total of distance by weeks
    const startIndex = (week - 1) * 3;
    const weekData = distanceAchieved.slice(startIndex, startIndex + 3);
    const total = sumOfKm(weekData);
    
    return total;
}

console.log(perWeek(distanceAchieved,1));
console.log(perWeek(distanceAchieved,2));
console.log(perWeek(distanceAchieved,3));
console.log(perWeek(distanceAchieved,4));
console.log(perWeek(distanceAchieved,5));
console.log(perWeek(distanceAchieved,6));
console.log(perWeek(distanceAchieved,7));