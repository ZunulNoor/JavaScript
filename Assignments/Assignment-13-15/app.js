document.write("<h2>Strings</h2>")
var student = []

var studentNames = new Array()

var strings = ["Hello", "World"]

var numbers = [1, 2, 3, 4, 5]

var booleans = [true, false,]

var mixedArray = [1, "Hello", true, {name: "John Doe"}]

document.write("<h4>Qualification</h4>")
var educationQualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD"
  ]
  document.body.innerHTML = educationQualifications.join(list)
document.write("<br>")
document.write("<br>")

var studentNames = ["Michael", "Jhon", "Tony"]
var studentScores = [320, 230, 480]
for (var i = 0; i < studentNames.length; i++) {
  studentScores[i] = (studentScores[i] / 500) * 100
}
for (var i = 0; i < studentNames.length; i++) {
  document.write("Student Name : " + studentNames[i] +  " Percentage : " + studentScores[i] + "%" + "<br>")
}
document.write("<br>")
document.write("<br>")


var colors = ["red", "blue", "green"]
document.write("The colors are : " + colors + "<br>")

var newColor = prompt("What color do you want to add to the beginning of the array?")
colors.unshift(newColor)
document.write("The colors are now : " + colors + "<br>")

newColor = prompt("What color do you want to add to the end of the array?")
colors.push(newColor)
document.write("The colors are now : " + colors + "<br>")

colors.unshift("yellow", "purple")
document.write("The colors are now : " + colors + "<br>")

colors.shift()
document.write("The colors are now : " + colors + "<br>")


colors.pop()
document.write("The colors are now : " + colors + "<br>")

var index = prompt("At what index do you want to add a color?")
newColor = prompt("What color do you want to add?")

colors.splice(index, 0, newColor)
document.write("The colors are now : " + colors + "<br>")

var deleteIndex = prompt("At what index do you want to delete colors?")
var deleteCount = prompt("How many colors do you want to delete?")
for (var i = 0; i < deleteCount; i++) {
  colors.splice(deleteIndex, 1)
}
document.write("The colors are now : " + colors + "<br>")
document.write("<br>")
document.write("<br>")


var studentScores = [320, 230, 480, 120]
var sort = studentScores.sort()
document.write("Student Score : 320, 230, 480, 120"+ "<br>" + "The sorted student scores are: " + sort)
document.write("<br>")
document.write("<br>")


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Pesahawar"]
var selectedCities = []
for (var i = 2; i <= 3; i++) {
  selectedCities.push(cities[i])
}
document.write("The selected cities are : " + selectedCities)
document.write("<br>")
document.write("<br>")


var array = ["This ", "is ", "my ", "cat"]
var sentence = array.join(" ")
document.write('Array : "This ", "is ", "my ", "cat"' + "<br>" + "String : " + sentence)
document.write("<br>")
document.write("<br>")


var fifo = []
fifo.push("Keyboard")
fifo.push("Mouse")
fifo.push("Printer")
fifo.push("Monitor")

document.write("Devices : " + "<br>" +  fifo[0] + " , " + fifo[1] + " , " + fifo[2] + " , " + fifo[3] + "<br>")
document.write("out : " + "<br>" +  fifo[0] + "<br>" + " out : " + "<br>" + fifo[1]+ "<br>" + " out : " + "<br>" + fifo[2] + "<br>" +  " out : " + "<br>" + fifo[3])
document.write("<br>")
document.write("<br>")


var lifo = []
lifo.push("Keyboard")
lifo.push("Mouse")
lifo.push("Printer")
lifo.push("Monitor")

document.write("Devices : " + "<br>" +  lifo[0] + " , " + lifo[1] + " , " + lifo[2] + " , " + lifo[3] + "<br>")
document.write("out : " + "<br>" +  lifo[3] + "<br>" + " out : " + "<br>" + lifo[2]+ "<br>" + " out : " + "<br>" + lifo[1] + "<br>" +  " out : " + "<br>" + lifo[0])
document.write("<br>")
document.write("<br>")



var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("<select>")

for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option value=" + phoneManufacturers[i] + ">" + phoneManufacturers[i] + "</option>")
}

document.write("</select>")