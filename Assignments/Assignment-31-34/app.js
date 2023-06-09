document.write("<h1>Date Methods</h1>")
var date = new Date()
document.write(date)
document.write("<br>")
document.write("<br>")

var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var currentmonth = new Date().getMonth()
alert("Current Month " + monthnames[currentmonth])

var daysnames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
var currentday = new Date().getMonth()
alert("Current Day " + daysnames[currentday])


var dayOfWeek = new Date().getDay()
if (dayOfWeek === 0 || dayOfWeek === 6) {
  alert("It's Fun day!")
}else{
    alert("Working Day")
}


var today = new Date()
var monthdays = today.getDate()
if (monthdays < 16) {
  alert("First fifteen days of the month")
} else {
  alert("Last days of the month")
}


var current_day = new Date()
var millsSince = current_day.getTime("Jan 1, 1970")
document.write("Elapsed millisecond since Jan 1, 1970 : " + millsSince)
document.write("<br>")

var current_day = new Date()
var millsSince = (current_day.getTime("Jan 1, 1970") / 60000)
document.write("Elapsed minutes since Jan 1, 1970 : " + millsSince)
document.write("<br>")
document.write("<br>")



var crr = new Date()
var hour = crr.getHours()

if (hour < 12) {
  document.write("It's AM")
} else {
  document.write("It's PM")
}
document.write("<br>")
document.write("<br>")

var laterDate = new Date()
laterDate.setFullYear(2020)
laterDate.setMonth(11)
laterDate.setDate(31)
laterDate.setHours(00)
laterDate.setMinutes(00)
laterDate.setSeconds(00)
document.write("Later Date : " + laterDate)
document.write("<br>")
document.write("<br>")

var firstRamdan = new Date()
firstRamdan.setFullYear(2023)
firstRamdan.setMonth(02)
firstRamdan.setDate(23)
var crrDay = new Date()
var daysSinceRamadan = Math.round((crrDay - firstRamdan) / (1000 * 60 * 60 * 24))
alert(daysSinceRamadan +  " days have passed since 1st Ramdan,2023")




var refDate = new Date()
refDate.setFullYear(2015)
refDate.setMonth(11)
refDate.setDate(05)
refDate.setHours(22)
refDate.setMinutes(50)
refDate.setSeconds(16)
var crrDay = new Date()
crrDay.setFullYear(2015)
crrDay.setMonth(00)
crrDay.setDate(01)
crrDay.setHours(00)
crrDay.setMinutes(00)
crrDay.setSeconds(00)
var defbw = Math.round((refDate - crrDay) / (1000 * 60))
alert("On refrence date " + refDate + " , " + defbw + " seconds has passed since 2015")


var din = new Date()
var getDin = new Date()
var hours = getDin.getHours()
getDin.setHours(hours - 1)
document.write("Current Date : " + din + "<br>" + " 1 hour ago , it was " + getDin ) 
document.write("<br>")
document.write("<br>")

var din = new Date()
var getsaal = new Date()
var year = getsaal.getYear()
getsaal.setYear(year - 100)
document.write("Current Date : " + din + "<br>" + " 100 years ago , it was " + getsaal )
document.write("<br>")
document.write("<br>")



  var currentYear = new Date().getFullYear()
  var userInput = prompt("Enter your Age!") 
  var yearOfBirth = currentYear - userInput 
  document.write("You are " + userInput + " years old"  + "<br>" +  "Your birth year is " + yearOfBirth)
  document.write("<br>")
  document.write("<br>")

document.write("<h2>K.E Bill</h2>")
var customerName = prompt("Enter your name")
var crrmonth = prompt("Enter Current month")
var unit = prompt("Enter units given as per on your K.E bill") 
var charges = 16

  document.write("Customer Name : " + customerName)
  document.write("<br>")
  document.write("Current Month : " + crrmonth )
  document.write("<br>")
  document.write("Number of Units : " + unit)
  document.write("<br>")
  document.write("Charges per unit : " + charges)
  document.write("<br>")
  document.write("<br>")


  var amount = unit * charges
  var late = 350
  var afterDue = late + amount


  document.write("Net Amount Payable (within due date) : " + amount)
  document.write("<br>")
  document.write("Late payment surcharge : " + late)
  document.write("<br>")
  document.write("Gross Amount payble after due date : " + afterDue)
  document.write("<br>")
