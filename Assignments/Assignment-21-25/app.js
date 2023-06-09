document.write("<h3>String Methods</h3>")

var firstName = prompt("What is your first name?")
var lastName = prompt("What is your last name?")
var fullName = firstName + " " + lastName
alert("Welcome, " + fullName + "!")


var favouriteMob = prompt("What is your favorite mobile phone with model?")
var lengthOfInput = favouriteMob.length
document.write("My favourite phone  is " + favouriteMob + "\n" + "Length of String is : " + lengthOfInput )
document.write("<br>")
document.write("<br>")


var str = "Pakistani"
var index = str.indexOf("n")
document.write("String : Pakistan" + "<br>" + "Index of 'n' is : " + index )
document.write("<br>")
document.write("<br>")


var string = "Hello World"
var lastIndex = string.lastIndexOf("l")
document.write("String : 'Hello World'" + "<br>" + "Last index of 'l' : "  + lastIndex)
document.write("<br>")
document.write("<br>")



var striing = "Pakistani"
var character = striing[3]
document.write("String : 'Pakistani'" + "<br>" + "Character at index 3 : " + character)
document.write("<br>")
document.write("<br>")



var hyder = "Hyderabad"
var islam = hyder.replace("Hyder", "Islam")
document.write("City : " + hyder + "<br>" + "After replacement : " + islam)
document.write("<br>")
document.write("<br>")


var message = "Ali and Sami are best friends. They play cricket and football together"
var replace = message.replace(/and/g, "&")
document.write("Before : " + message + "<br>" + "After replacement : " +replace )
document.write("<br>")
document.write("<br>")


var num = "472"
var replaceNum = Number(num)

document.write("String : " + num)
document.write("<br>")
document.write("Type : String")
document.write("<br>")
document.write("Number : " + replaceNum)
document.write("<br>")
document.write("Type : Number")
document.write("<br>")
document.write("<br>")


var pea = "peanuts"
var upper = pea.toUpperCase("peanuts")
document.write("User Input : "+ pea + "<br>" + "Upper Case : " + upper)
document.write("<br>")
document.write("<br>")


var java = "javascript"
var Java_script = java.charAt(0).toUpperCase("j", "J") +java.slice(1)
document.write("User Input : " + java + "<br>" + "Title case : " + Java_script)
document.write("<br>")
document.write("<br>")


var number = 35.36
var replaceNum = number.toString().replace(".", "")
document.write("Number : " + number + "<br>" + "Result : " + replaceNum)
document.write("<br>")
document.write("<br>")


var username = prompt("Enter a username: ")
var specialSymbols = ['@', '.', ',', '!']
for (var i = 0; i < specialSymbols.length; i++) {
  if (username.indexOf(specialSymbols[i]) > -1) {
    alert("Please Enter a Valid Username!")
    username = prompt("Enter a username: ")
  }
}
document.write("User name : " + username)
document.write("<br>")
document.write("<br>")


var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("Welcome ZN Bakery \n Enter a food item")
var found = false
for (var i = 0; i < A.length; i++) {
  if (userInput.toLowerCase() === A[i].toLowerCase()) {
    found = true
  }
}
if (found) {
    document.write(userInput +" is available"+ " in our bakery")
} else {
  document.write("Sorry " + userInput + " is not available")
}
document.write("<br>")
document.write("<br>")


var password = prompt("Enter a password")
var valid = true
if (password.charAt(0) >= '0' && password.charAt(0) <= '9') {
  valid = false
}
for (var i = 0; i < password.length; i++) {
  if (password.charAt(i) < '0' || password.charAt(i) > '9' && password.charAt(i) < 'a' || password.charAt(i) > 'z' && password.charAt(i) < 'A' || password.charAt(i) > 'Z') {
    valid = false;
  }
}
if (password.length < 6) {
  valid = false
}
if (!valid) {
  alert("Password cannot begin with number \n Please enter a valid password :")
  password = prompt("Enter a password")
}
document.write("Confirm password : " + password)
document.write("<br>")
document.write("<br>")



var inputword = prompt("Enter a word")
var lastCharacter = inputword.charAt(inputword.length - 1)
document.write("UserInput : " + inputword + "<br>" +  "The last character of the word " + inputword + " is " + lastCharacter)
document.write("<br>")
document.write("<br>")



var str = "The quick brown fox jumps over the lazy dog"
var count = 0
var words = str.split(" ")
for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++
  }
}
alert("The word 'the' appears " + count + " times in the string.")



