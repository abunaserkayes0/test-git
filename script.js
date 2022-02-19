// Code-Challenge=>01

/* const marksMass=Number(prompt("Mark mass: "));
const marksHeight=Number(prompt("Mark Height: "));

const marksBMI=marksMass/marksHeight**2;

const johnMass=Number(prompt("John mass: "));
const johnHeight=Number(prompt("john Height: "));

const johnBMI=johnMass/(johnHeight*johnHeight);
console.log(marksBMI>JohnHeight);
*/

// Code-Challenge=>02

/* const marksMass=Number(prompt("Mark mass: "));
const marksHeight=Number(prompt("Mark Height: "));

const marksBMI=marksMass/marksHeight**2;

const johnMass=Number(prompt("John mass: "));
const johnHeight=Number(prompt("john Height: "));

const johnBMI=johnMass/(johnHeight*johnHeight);

if (marksBMI>johnBMI) {
    console.log(`Mark's BMI (${marksBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's  (${marksBMI.toFixed(1)})!`);
}  */

// Code-Challenge=>03

// Solution-01

/* const dolphinsOne=97;
const dolphinsTwo=112;
const dolphinsThree=101;

const coalsOne=88;
const coalsTwo=91;
const coalsThree=110;

const dolphinsAverage=(dolphinsOne+dolphinsTwo+dolphinsThree)/3;
const colasAverage=(coalsOne+coalsTwo+coalsThree)/3;

if (dolphinsAverage>colasAverage) {
    console.log(`Dolphin (${dolphinsAverage.toFixed(1)}) is winner🏆`);
}
else if(colasAverage>dolphinsAverage){
    console.log(`Kolas (${colasAverage.toFixed(1)}) is winner🏆`);
}
else {
    console.log("The Match is draw📍📍📍");
} */



// Bonus-01 and Bonus-02

/* const dolphinsAverage=(97+101+112)/3;
const colasAverage=(109+95+123)/3;

if (dolphinsAverage>colasAverage && dolphinsAverage>=100) {
    console.log(`Dolphin (${dolphinsAverage.toFixed(1)}) is winner🏆`);
}
else if(colasAverage>dolphinsAverage && colasAverage>=100){
    console.log(`Kolas (${colasAverage.toFixed(1)}) is winner🏆`);
}
else if(colasAverage===dolphinsAverage && colasAverage>=100 && dolphinsAverage>=100){
    console.log("Both tram is wins😳");
}
else{
    console.log("No one got this challenge😓");
} */


// Code-Challenge-04

const restaurantBill=430;
let totalResult;
if(restaurantBill>=50&&restaurantBill<=300){
    totalResult=restaurantBill+(restaurantBill*0.15);
    console.log(totalResult);
}
else{
    totalResult=restaurantBill+(restaurantBill*0.2);
    console.log(totalResult);
}
