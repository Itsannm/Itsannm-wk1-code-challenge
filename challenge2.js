//Challenge [2]: Fast X;

//speed of the car is taken as input using the prompt() function
// and is stored in the speed variable after parsing it as an integer using parseInt().
const speed = parseInt(prompt("Enter speed in kmh"));

const speedLimit = 70;
const kmPerDemeritPoint = 5;
const maxDemeritPoints = 12;

if (speed < speedLimit) {
  console.log("Ok");
} else {
  const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

  if (demeritPoints > maxDemeritPoints) {
    console.log("License suspended");
  } else {
    console.log("Points:", demeritPoints);
  }
}