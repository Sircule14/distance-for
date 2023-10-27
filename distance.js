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


console.log(distanceAchieved);

function sumOfKm (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++){
    sum += array[i];
    }
    return sum;
}

const totalDistance = "Distancia recorrida " + sumOfKm(distanceAchieved);

console.log(totalDistance);
