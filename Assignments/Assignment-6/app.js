document.write("<h1>Result</h1>")

var a = 10
document.write("The value of a is : " + a)
document.write("<br>")

document.write(".....................................................................")
document.write("<br>")
document.write("<br>")

var preincrement = ++a 
document.write("The value of ++a is : " + preincrement)
document.write("<br>")
document.write("Now the value of a is : " + preincrement)
document.write("<br>")
document.write("<br>")

var x = 11
var  xI = ++a
document.write("The value of a++ is : " + x)
document.write("<br>")
document.write("Now the value of a is : " + xI)
document.write("<br>")
document.write("<br>")

var yI = --a 
document.write("The value of --a is : " + yI)
document.write("<br>")
document.write("Now the value of a is : " + yI)
document.write("<br>")
document.write("<br>")

var y = 11 
var y_I = --a
document.write("The value of a-- is : " + y)
document.write("<br>")
document.write("Now the value of a is : " + y_I)
document.write("<br>")
document.write("<br>")


document.write("<h3>a=2 , b=1</h3>")
document.write("<h5>Results : </h5>")

var valueOfa = 2
var  valueOfb = 1

var _a = --valueOfa
document.write("--a is : " + _a)
document.write("<br>")

var _a_b = --valueOfa - --valueOfb
document.write("--a - --b is : " + _a_b)
document.write("<br>")

var _a_b_ = --valueOfa - --valueOfb + ++valueOfb
document.write("--a - --b + ++b is : " + _a_b_)
document.write("<br>")


var _a_b__ = --valueOfa - --valueOfb + ++valueOfb + valueOfb--
document.write("--a - --b + ++b + b-- is : " + _a_b__)
document.write("<br>")
document.write("<br>")


 document.write("<h1>Table operator</h1>")
 
 var num = prompt("Enter a number for table ")
    for (let i = 1; i <= 10; i++) {
      document.write(num + " x " + i + " = " + num * i + "<br>")
    
  if (!num) { 
       num = 5
  } 
} 
document.write("<br>")
document.write("<br>")

document.write("<h3>Subject   |   Total Marks   |   Obtained Marks   |   Percentage</h3>")
var totalMarks = 100  
var che = 86
var perChe = (86 / 100) * 100

var phy = 74
var perPhy = (74 / 100) * 100

var math = 68
var perMath = (68 / 100) * 100

document.write("CHE | " + totalMarks + " | " + che + " | " + perChe + "%")
document.write("<br>")
document.write("PHY | " + totalMarks + " | " + phy + " | " + perPhy + "%")
document.write("<br>")
document.write("MATH | " + totalMarks + " | " + math + " | " + perMath + "%")
document.write("<br>")
document.write("<br>")

var allOverMarks = che + phy + math
var totalPercentage = (allOverMarks / 300) * 100 
document.write("TOTAL | " + "300" + " | " + allOverMarks + " | " + totalPercentage + "%")
document.write("<br>")
document.write("<br>")

