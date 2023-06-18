//Challenge [1]: Let's get graded!;

//used the parseFloat() function to convert the input to a floating-point number and the prompt() 
//function is to display a dialog box to the user and retrieve their input as a string. 
const mark = parseFloat(prompt("Enter student mark (0-100):")); 

if (mark > 100 || mark < 0 || isNaN(mark)) {
  console.log("Invalid!."); // marks entered <0 and >100 output will read Invalid
} else if (mark > 79) {
  console.log("Grade: A"); //marks above 79 to 100 will output Grade "A"
} else if (mark >= 60) {
  console.log("Grade: B"); //marks 60 to 79 will output Grade "B"
} else if (mark >= 50) {   
  console.log("Grade: C"); //marks 50 to 59 will output Grade "C"
} else if (mark >= 40) {
  console.log("Grade: D"); //marks 40 to 49 will output Grade "D"
} else {
  console.log("Grade: E"); //marks 0 to 39 will output Grade "E"
}