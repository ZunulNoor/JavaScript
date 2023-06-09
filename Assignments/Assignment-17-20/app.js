document.write("<h2>Array And Loops</h2>")

var arrayOfArrays = []
arrayOfArrays = [[null, null], [null, null], [null, null]]
arrayOfArrays[0][0] = "Salam"
document.write(arrayOfArrays[0][0])
document.write("<br>")
document.write("<br>")


var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ]
for (var i = 0; i < matrix.length; i++) {
    document.write(matrix[i] + "<br>")

  }  
document.write("<br>")
document.write("<br>")


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var i = 0; i < numbers.length; i++) {
  document.write(numbers[i] + "<br>")
}
document.write("<br>")
document.write("<br>")


var tableNumber = prompt("Enter the table number")
var tableLength = prompt("Enter the table length")
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>")
}
document.write("<br>")
document.write("<br>")


var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + " is at index " + i + "<br>")
}
document.write("<br>")
document.write("<br>")


// Counting
var count = 1
while (count <= 15) {
    document.write( count + " , ")
    count++
}
document.write("<br>")
document.write("<br>")

// Reverse counting
var revcount = 10
while (revcount >= 1) {
  document.write(revcount + " , ")
  revcount--
}
document.write("<br>")
document.write("<br>")

// Even
var evencount = 0
while (evencount <= 20) {
  if (evencount % 2 === 0) {
   document.write(evencount + " , ")
}
  evencount++
}
document.write("<br>")
document.write("<br>")

// Odd
var oddcount = 1
while (oddcount <= 20) {
  if (oddcount % 2 !== 0) {
     document.write(oddcount + " , ")
  }
  oddcount++
}
document.write("<br>")
document.write("<br>")

// Series
var seriescount = 2
var k = 1
while (seriescount <= 10) {
  document.write(seriescount * k  + "k" + " , ")
  seriescount++
  k++
}
document.write("<br>")
document.write("<br>")
