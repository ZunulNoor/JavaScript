document.write("<h2>Math Expressions</h2>")

var positivenumber = prompt("Enter a positive integer")
var userInput = positivenumber
document.write("Number : " + positivenumber)
document.write("<br>")

var roundOff = Math.round(positivenumber)
document.write("Round of value : " + roundOff)
document.write("<br>")

var floorvalue = Math.floor(positivenumber)
document.write("Floor value : " + floorvalue)
document.write("<br>")

var ceilvalue = Math.ceil(positivenumber)
document.write("Ceil Value : " + ceilvalue)
document.write("<br>")
document.write("<br>")


var negativenumber = prompt("Enter a negative floating integer")
var userInput = negativenumber
document.write("Number : " + negativenumber)
document.write("<br>")

var roundOff = Math.round(negativenumber)
document.write("Round of value : " + roundOff)
document.write("<br>")

var floorvalue = Math.floor(negativenumber)
document.write("Floor value : " + floorvalue)
document.write("<br>")

var ceilvalue = Math.ceil(negativenumber)
document.write("Ceil Value : " + ceilvalue)
document.write("<br>")
document.write("<br>")

var user_input = prompt("Enter a integer")
var absoluteValue = Math.abs(user_input)
document.write("Absolute value of " + user_input + " is " + absoluteValue)
document.write("<br>")
document.write("<br>")


var randomNumber = Math.floor(Math.random() * 6) + 1
document.write("Random dice value : " + randomNumber)
document.write("<br>")
document.write("<br>")


var headTail = Math.floor(Math.random() * 2) + 1
document.write("Random coin Value " + headTail)
document.write("<br>")
document.write("<br>")


var anyNumber = Math.round(Math.random() * 100)
document.write("Random number b/w 1 - 100 is : " + anyNumber)
document.write("<br>")
document.write("<br>")


var weight = prompt("Enter your weight in kilograms")
var parse = parseFloat(weight.replace("kg" , " ").replace(" kgs" , " "))
document.write("The weight of user is " + parse + " kilograms")
document.write("<br>")
document.write("<br>")


var secret = "6"
var userNum = prompt("Enter a number")
if(userNum === secret){
    
    document.write("Congrats ! its correct secret num is : " + userNum)
}
else{
    document.write("Sorry its wrong! secret num is : 6")
}
document.write("<br>")
document.write("<br>")