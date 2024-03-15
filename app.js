// //---------------------------------Chap 12-13----------------------------------------
// // #1
// var ch = prompt("Enter any Character");

// if (ch >= 'A' && ch <= 'Z'){
//     document.write(ch ," is an UpperCase character");
// }
// else if (ch >= 'a' && ch <= 'z'){
//     document.write(ch ," is a LoweCase character");
// }
// else if(ch >= 0 && ch <= 9){
//     document.write(ch ," is a number");
// } 
// else{
//     document.write(ch ," is a Special character");
// }



// // #2
// var input1 = +prompt("Enter First Number", "2");
// var input2 = +prompt("Enter Second Number", "2");
// if(input1 == input2){
//     document.write("Both are Equal");
// }
// else if(input1 > input2){
//     document.write(input1, " is Greater");
// }
// else{
//     document.write(input2, " is Greater");
// }



// // #3
// var input = +prompt("Enter Number");
// if(input < 0){
//     document.write(input, " is Negative Integer");
// }
// else if(input > 0){
//     document.write(input, " is Positive Integer");
// }
// else{
//     document.write(input, " is Zero");
// }


// //#4
// var input = prompt("Enter Any Single Character").toUpperCase();
// if(input == "A" || input == "E" || input == "I" || input == "O" || input == "U"){
//     document.write("True ", input, " is Vowel Character");
// }
// else{
//     document.write("False ", input, " is Normal Character");
// }


// //#5
// var password = "abcd1234";
// var userinput = prompt("Enter Your Password");
// if(userinput == ""){
//     document.write("Please enter your password")
// }
// else if(userinput == password){
//     document.write("Correct! The password you entered matches the original password");
// }

// else{
//     document.write("Invalid Password!")
// }


// // #6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }


// // #7
// var time = +prompt("Enter Time", "2000");
// if(time >= 0000 && time < 1200){
//     document.write("Good Morning!")
// }
// else if(time >= 1200 && time < 1700){
//     document.write("Good Afternoon!")
// }
// else if(time >= 1700 && time < 2100){
//     document.write("Good Evening!")
// }
// else if(time >= 2100 && time <= 2359){
// document.write("Good Night!")
// }
// else{
//     document.write("Invalid Time")
// }



// // ------------------------------------Chap 14-16 --------------------------------------------
// //#1
// var studentArr = [];

//  //#2
// var studentArr = {};

//  //#3
// var stringArr = ["String"];

//  //#4
// var numberArr = [10];

//  //#5
// var booleanArr = [true, false];

//  //#6
// var mixedArr = ["String",10,true];

//  //#7
// var QualArr = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"];
// document.write("Qualifications:<br>");
// console.log(QualArr);
// document.write("<br>1)",QualArr[0]);
// document.write("<br>2)",QualArr[1]);
// document.write("<br>3)",QualArr[2]);
// document.write("<br>4)",QualArr[3]);
// document.write("<br>5)",QualArr[4]);
// document.write("<br>6)",QualArr[5]);
// document.write("<br>7)",QualArr[6]);
// document.write("<br>8)",QualArr[7]);


// //8
var studentArr = ["Michael","John","Tony"];
var numberArr = [320,230,480];
var perArr = [];
perArr[0] = numberArr[0]/500*100;
perArr[1] = numberArr[1]/500*100;
perArr[2] = numberArr[2]/500*100;
document.write("Score of ", studentArr[0], " is ",numberArr[0], ".Percentage: ",perArr[0],"%");
document.write("<br>Score of ", studentArr[1], " is ",numberArr[1], ".Percentage: ",perArr[1],"%");
document.write("<br>Score of ", studentArr[2], " is ",numberArr[2], ".Percentage: ",perArr[2],"%");