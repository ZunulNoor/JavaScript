document.write("<br>")
document.write("<h1>Math Expressions</h1>")

var firstnum = 8
var secondnum = 4
var total = firstnum + secondnum
var total = firstnum - secondnum
var total = firstnum / secondnum
var total = firstnum % secondnum


document.write("<br>")
document.write("The Sum of 8 and 4 is " + total)
document.write("<br>")
document.write("The subtraction of 8 and 4 is " + total )
document.write("<br>")
document.write("The  of 8 and 4 is " + total )
document.write("<br>")
document.write("The Sum of 8 and 4 is " + total )
document.write("<br>")
document.write("<br>")

document.write("<h1Increment/Decrement</h1>")

var variable = "Value after variable declaration is: ?? "
document.write(variable)
document.write("<br>")

var initialValue = "Initial value : "
var value = 5
document.write(initialValue + value)
document.write("<br>")

var newValue = ++value
var afterIncrement = "Value after increment is: "
document.write(afterIncrement + newValue)
document.write("<br>")


var add = 7
var addition = newValue + add
var afterAdd = "Value after addition is : "
document.write(afterAdd + addition)
document.write("<br>")

var newValue2 = --addition
var afterDecrement = "Value after decrement is :  "
document.write(afterDecrement + newValue2)
document.write("<br>")


var divide = newValue2 % 3 
var afterDivide = "The remainder is : " 
document.write(afterDivide + divide)
document.write("<br>")
document.write("<br>")


document.write("<h1>Ticket Price</h1>")

var costOfTicket = 600
var tickettoBuy = 5
var totalAmount = costOfTicket * tickettoBuy
document.write("Total Cost to Buy 5 ticket is " + totalAmount + "PKR") 
document.write("<br>")
document.write("<br>")

document.write("<h1>Table</h1>")
document.write("<br>")

var line1 = "9 x 1 = 9"
document.write(line1)
document.write("<br>")

var line2 = "9 x 2 = 18"
document.write(line2)
document.write("<br>")

var line3 = "9 x 3 = 27"
document.write(line3)
document.write("<br>")

var line4 = "9 x 4 = 36"
document.write(line4)
document.write("<br>")

var line5 = "9 x 5 = 45"
document.write(line5)
document.write("<br>")

var line6 = "9 x 6 = 54"
document.write(line6)
document.write("<br>")

var line7 = "9 x 7 = 63"
document.write(line7)
document.write("<br>")

var line8 = "9 x 8 = 72"
document.write(line8)
document.write("<br>")

var line9 = "9 x 9 = 81"
document.write(line9)
document.write("<br>")

var line10 = "9 x 10 = 90"
document.write(line10)
document.write("<br>")
document.write("<br>")

document.write("<h1>Degree Conversion</h1>")

var f = 81
var c = (f - 32) * 5 / 9
document.write("77 °F is " + c + " °C")
document.write("<br>")

var _c = 48
var _f = (_c * 9 / 5) + 32
document.write("48 °C is " + _f + "°F")
document.write("<br>")
document.write("<br>")


document.write("<h1>Shopping Cart</h1>")

var  item  = "Price of one dozen Apple is "
var apple  = 120
var totalapple = 120 * 3
document.write(item + apple)
document.write("<br>")

var qoa = "Quantity of apple is 3 Dozen"
document.write(qoa)
document.write("<br>")
 
var item2 = "Price on 1 kg Plum is "
var plum = 150
document.write(item2 + plum)
document.write("<br>")

var qop = "Quantity of Plum is 1 kg"
document.write(qop)
document.write("<br>")


var shippingCharge = "Cost of Shipping charge is " 
var charge = 80
document.write(shippingCharge + charge)
document.write("<br>")
document.write("<br>")


var totalCost = "Your total amount is "
var totalcash = totalapple + plum + charge
document.write(totalCost + totalcash)
document.write("<br>")
document.write("<br>")
document.write("<br>")


document.write("<h1>Marks Sheet</h1>")

var totalMarks = "Total marks : " 
var totalMark = 980
document.write(totalMarks + totalMark)
document.write("<br>")

var markObtain = "Mark obtained : "
var markObtained = 804
document.write(markObtain + markObtained)
document.write("<br>")

var per = "Percentage : " 
var percentage = (markObtained / totalMark) * 100
document.write(per + percentage)
document.write("<br>")
document.write("<br>")

document.write("<h1>Currency in PKR</h1>")

var pkr = (10 * 104.80) + (25 * 28)
var totalpkr = "Total currency in PKR : "
document.write(totalpkr + pkr)
document.write("<br>")
document.write("<br>")

document.write("<h1>Maths</h1>")

var number = 18
var mathematics = (number + 5 ) * 10 / 2
document.write("Total : " + mathematics) 
document.write("<br>")
document.write("<br>")

document.write("<h1>Age Calculator</h1>")

var currentYear = new Date().getFullYear()
document.write("Current Year : " + currentYear)
document.write("<br>")

var birthYear = prompt("What is your birth year?")
document.write("Birth Year : " + birthYear)
document.write("<br>")

var age1 = currentYear - birthYear
var age2 = (currentYear - birthYear) - 1
document.write("They are either " + age1 + " or " + age2 + " years old")
document.write("<br>")
document.write("<br>")


document.write("<h1>Geometrizer</h1>")

var radius = 18
document.write("Radius of a circle : " + radius)
document.write("<br>")

var circumference = 2 * Math.PI * radius
document.write("The circumference is : " + circumference)
document.write("<br>")

var area = Math.PI * 18 * 18
document.write("The area is : " + area)
document.write("<br>")
document.write("<br>")



document.write("<h1>The Lifetime Supply Calculator</h1>")

var favDrink  = "Tea"
document.write("Favourite Drink : " + favDrink)
document.write("<br>")

var currentAge = 18
document.write("Current Age : " + currentAge)
document.write("<br>")

var estimatedAge = 40
document.write("Estimated Age : " + estimatedAge)
document.write("<br>")

var cupOfTea = 4
document.write("Average Cup of tea : " + cupOfTea)
document.write("<br>")

var restLife = ((estimatedAge - currentAge)* 12 * 365 * 4)
document.write("You will need " + restLife + " cups of tea to last you until the ripe old age of " + estimatedAge)
document.write("<br>")
