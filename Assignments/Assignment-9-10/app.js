document.write("<h2>City</h2>")

var user_input = prompt("Enter your city")
if(user_input === "Karachi" || user_input === "KARACHI" || user_input === "karachi"){
    document.write("<===========>Welcome to City of Lights<===========>")
}
else{
document.write("DACOIT")
}
document.write("<br>")
document.write("<br>")

document.write("<h3>Gender</h3>")

var user_input = prompt("Enter your gender")
if(user_input === "MALE" || user_input === "Male" || user_input === "male"){
    document.write("Good Morning Sir")
}
 else if(user_input === "FEMALE" || user_input === "Female" || user_input === "female"){
    document.write("Good Morning Ma'am")

}

else{
document.write("Good Morning")
}
document.write("<br>")
document.write("<br>")


document.write("<h2>Signal Instruction</h2>")

var signal = prompt("Enter signal colors")
document.write("<br>")

if(signal === "RED" || signal === "Red" || signal === "red"){
    document.write("Red : Must stop")
}
else if(signal === "YELLOW" || signal === "Yellow" || signal === "yellow"){
    document.write("Yellow : Ready to move")    
}
else if(signal === "GREEN" || signal === "Green" || signal === "green"){
    document.write("Green : Move now")   

}
else{
    document.write("Please enter colour")
}
document.write("<br>")
document.write("<br>")


document.write("<h2>Low Fuel</h2>")

var fuel = prompt("Enter Fuel in liter")
if (fuel <= "0.25") {
    document.write("Please refill the fuel in your car")
    document.write("<br>")
}
else{
    document.write("No need !")
}
document.write("<br>")
document.write("<br>")


var a = 4
if (++a === 5){
alert("given condition for variable a is true")
}
var b = 82
if (b++ === 83){
alert("given condition for variable b is true")
}
var c = 12
if (c++ === 13){
alert("condition 1 is true")
}
if (c === 13){
alert("condition 2 is true")
}
if (++c < 14){
alert("condition 3 is true")
}
if(c === 14){
alert("condition 4 is true")
}
var materialCost = 20000
var laborCost = 2000
var totalCost = materialCost + laborCost
if (totalCost === laborCost + materialCost){
alert("The cost equals : " + totalCost)
}
 if (true){
alert("True")
}
if (false){
alert("False")
}
if("car" < "cat"){
alert("car is smaller than cat")
}

document.write("<h2>Matric Mark Sheet</h2>")

var obtainedMarks = prompt("Marks Obtained in Matric")
document.write("Obtained Marks in Matric : " + obtainedMarks)
document.write("<br>")

var totalMarks = prompt("Total Marks")
document.write("Total Marks : " + totalMarks)
document.write("<br>")

var percentage = (obtainedMarks / totalMarks) * 100
document.write("Percentage : " + percentage + " %")
document.write("<br>")
if (percentage >= 80.00) {
  document.write("Grade : A one")
  document.write("<br>")
  document.write("Remarks : Execellent")

} else if (percentage >= 70.00) {
    document.write("Grade : A ")
    document.write("<br>") 
    document.write("Remarks : Good")

} else if (percentage >= 60.00) {
  document.write("Grade : B")
  document.write("<br>")
  document.write("Remarks : You need to Improve ")

} else if (temperature < 60.00) {
  document.write("Grade : Fail")
  document.write("<br>")
  document.write("Remarks : Sorry")

} 
document.write("<br>")
document.write("<br>")
 
document.write("<h2>Guess Game 1</h2>")

var usernum = prompt("Enter a number between 0-9")
if (usernum === "3"){
    document.write("Bingo! Correct answer")
}
else if(usernum === "4") {
    document.write("Close enough to the correct answer")
}
else{
    document.write("Wrong Answer")
}
document.write("<br>")
document.write("<br>")


document.write("<h2>Guess Game 2</h2>")

var userNumber = prompt("Enter a number")
if (userNumber % 3 === 0) {
    document.write(userNumber + " is divisible by 3")
  } else {
    document.write(userNumber + " is not divisible by 3")
  }
document.write("<br>")
document.write("<br>")


document.write("<h2>Guess Game 3</h2>")
var evenOrodd = prompt("Enter a number i will check whether the number is even or odd")

if (evenOrodd % 2 === 0) {
  document.write(evenOrodd + " is even.")
} else {
  document.write(evenOrodd + " is odd.")
}
document.write("<br>")
document.write("<br>")


document.write("<h2>Guess Game 4</h2>")
var temperature = prompt("Enter the temperature: ")

if (temperature > 40) {
  document.write("It is too hot outside.")
} else if (temperature > 30) {
  document.write("The Weather today is Normal.")
} else if (temperature > 20) {
  document.write("Today's Weather is cool.")
} else if (temperature > 10) {
  document.write("OMG! Today's weather is so Cool.")
} 
  else {
  document.write("It's too cold outside.")
}
document.write("<br>")
document.write("<br>")

document.write("<h2>Guess Game 5</h2>")
var firstNumber = prompt("Enter the first number")
var secondNumber = prompt("Enter the second number")
var operator = prompt("Enter anyone + , - , * , / , %")

if (operator === "+") {
  document.write(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber))

} else if (operator === "-") {
  document.write(firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber))

} else if (operator === "*") {
  document.write(firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber))
} else if (operator === "/") {
  document.write(firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber))
} else if (operator === "%") {
  document.write(firstNumber + " % " + secondNumber + " = " + (firstNumber % secondNumber))
}
