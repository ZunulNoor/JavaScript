document.write("<h2>Character</h2>")

var alphabet = prompt("Enter a alphabet")

if (alphabet >= '0' && alphabet <= '9') {
  document.write("The alphabet " + alphabet + " is a number.")

} else if (alphabet >= 'A' && alphabet <= 'Z') {
  document.write("The alphabet " + alphabet + " is an uppercase letter.")

} else if (alphabet >= 'a' && alphabet <= 'z') {
  document.write("The alphabet " + alphabet + " is a lowercase letter.")
}
else {
  document.write("The alphabet " + alphabet + " is not a number, uppercase letter, or lowercase letter.")
}
document.write("<br>")
document.write("<br>")

document.write("<h2>Integer</h2>")

var num1 = prompt("Enter the first integer")
var num2 = prompt("Enter the second integer")

if (num1 > num2) {
  document.write("The larger number is " + num1)

} else if (num2 > num1) {
  document.write("The larger number is " + num2)

} else {
  document.write("The two numbers are equal")
}
document.write("<br>")
document.write("<br>")

document.write("<h4>Positive / Negative or Zero</h4>")
var number = prompt("Enter a number")

if (number > 0) {
  document.write("The number " + number + " is positive")
} else if (number < 0) {
  document.write("The number " + number + " is negative")
} else {
  document.write("The number is zero")
}
document.write("<br>")
document.write("<br>")


document.write("<h3>Vowel</h3>")

var alphabet = prompt("Enter a alphabet")

if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u") {
  document.write("The alphabet " + alphabet + " is a vowel")
} else {
  document.write("The alphabet " + alphabet + " is not a vowel")
}
document.write("<br>")
document.write("<br>")

document.write("<h3>Create Password</h3>")

var enterPassword = prompt("Enter a password")
var confirmPassword = prompt("confirm you password")

if (confirmPassword === "") {
  document.write("Please enter a password.")
} else {
  if (confirmPassword === enterPassword) {
    document.write("Correct! The password you entered matches the original password.")
  } else {
    document.write("Incorrect password.")
  }
}
document.write("<br>")
document.write("<br>")



document.write("<h4>Statement Check</h4>")
 
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
document.write("Good Day")
}else{
greeting = "Good evening";
document.write("Good Evening")
}
document.write("<br>")
document.write("<br>")


document.write("<h3>Clock</h3>")

var time = prompt("Enter the time in 24 hours format like 1700(5 pm)")

if (time >= 0000 && time < 1200) {
  document.write("Good morning!")
} else if (time >= 1200 && time < 1700) {
  document.write("Good afternoon!")
} else if (time >= 1700 && time < 2100) {
  document.write("Good evening!")
} else if(time >= 2100 && time < 2359){
  document.write("Good night!")
}
document.write("<br>")
document.write("<br>")