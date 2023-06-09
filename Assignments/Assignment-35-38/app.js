document.write("<h2>Functions</h2>")

function tellTime() {
  var now = new Date()
  document.write("Current time : "+ now)
}
tellTime()
document.write("<br>")
document.write("<br>")

    
function greet(){
    var userFirstName = prompt("Enter your First name")
    var userLastName = prompt("Enter your Last name")
    var fullName = userFirstName + " " + userLastName
    document.write("Full Name : " + fullName)
}
greet()
document.write("<br>")
document.write("<br>")


function userInput(){
    var userNum1 = prompt("Enter a number for addition")
    var userNum2 = prompt("Enter another number for addition")
    var add = parseInt(userNum1) + parseInt(userNum2)
    document.write("Addition : " + add)
}
userInput()
document.write("<br>")
document.write("<br>")



var firstNum = prompt("Enter a number in calculator")
var operation = prompt("operator")
var secondNum = prompt("Enter another number for operation")

function calculator(firstNum, operation, secondNum){
    if (operation === "+") {
        result = parseInt(firstNum) + parseInt(secondNum)
    }else if(operation === "-"){
        result = parseInt(firstNum) - parseInt(secondNum)
    }else if(operation === "*"){
        result = parseInt(firstNum) * parseInt(secondNum)
    }else if(operation === "/"){
        result = parseInt(firstNum) / parseInt(secondNum)
    }
    document.write("Answer : " + result)
}
calculator(firstNum, operation, secondNum)
document.write("<br>")
document.write("<br>")


function square(){
    var numberSquare = prompt("Enter a number to check square of given number")
    var sResult = parseInt(numberSquare) * parseInt(numberSquare)
    document.write("Square of " + numberSquare + " is " + sResult)
}
square()
document.write("<br>")
document.write("<br>")



  function factorial(n){
    if(n < 0){
        return  "number has to be positive"
    }
    
    if(n == 0 || n == 1){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
var n = prompt("Enter a number to check its factorial")
answer = factorial(n)
document.write("Factorial of " + n + " is " + answer)
document.write("<br>")
document.write("<br>")
  

  function counting(start, end){
  for( i = start;  i <= end;  i++){
    document.write(i + "<br>")
  } 
  }
  var start = prompt("Enter a number to start counting")
  var end= prompt("Enter a number to end counting")
  counting(start, end)
document.write("<br>")
document.write("<br>")



function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
  return num * num
  }
  return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))
}
var base = prompt("Enter Base")
var perpendicular = prompt("Enter Prependicular")
var hypotenuse = calculateHypotenuse(base, perpendicular)
document.write("Hypoteneus of right angle triangle is :  " + hypotenuse)
document.write("<br>")
document.write("<br>")



function area(width, height) {
  var area = width * height
  return area 
}
var width = prompt("Enter Width")
var height = prompt("Enter Area")
var calculate = area(width, height)
document.write("Area of Rectangle is : " + calculate)
document.write("<br>")
document.write("<br>")


function firstLetterCapatilise(str) {
  var words = str.split(" ")

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }

  return words.join(" ")
}
var str = "the quick brown fox"
var capitalWord = firstLetterCapatilise(str)
document.write(capitalWord)
document.write("<br>")
document.write("<br>")

function findLongestWord(string) {
  var words = string.split(" ")
  var longestWord = words[0]
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i]
    }
  }
  return longestWord
}
var string = "Web Development Tutorial"
var longestWord = findLongestWord(string)
document.write("The longest word in Web Development Tutorial is : " + longestWord)
document.write("<br>")
document.write("<br>")


function letterCounting(string$, letter) {
    var count = 0
    for (var i = 0; i < string$.length; i++) {
      if (string$[i] === letter) {
        count++
      }
    }
    return count
  }
var string$ = "Hey I'm Zun-ul-noor"
var letter = "u"
var count = letterCounting(string$, letter);
document.write("Letter u occure in Hey I'm Zun-ul-noor is : " + count + " times")
document.write("<br>")
document.write("<br>")


function calcCircumference() {
    var r = 3
    var circumference = parseInt(2) * Math.PI * r  
    document.write("Circumference of circle (r = 3) is : " + circumference)   
}
calcCircumference()
document.write("<br>")
document.write("<br>")



function calcArea() {
    var r = 5
    var r2 = r * r
    var area = Math.PI * r2  
    document.write("Area of circle (r = 5) is : " + area)   
}
calcArea()
document.write("<br>")