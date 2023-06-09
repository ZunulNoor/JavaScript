document.write("<h2>Function | Switch | While | Do while</h2>")
    
function power(a, b) {
    if (b === 0) {
      return 1
    } else if (b === 1) {
      return a
    } else {
      return a * power(a, b - 1);
    }
  }
  var result = power(2, 3)
 document.write(result)
document.write("<br>") 
document.write("<br>")    


 
 function isLeapYear() {
    var userInput = prompt("Enter year to check whether the year is leap or not ")
    if (userInput % 4 === 0 || userInput % 400 === 0 ) {
      alert("The year "+ userInput + " is a leap year."); 
    } else {
      alert("The year "+ userInput + " is not a leap year.");
    }
  }
  isLeapYear();

function perimeter(a, b, c) {
    return (a + b + c) / 2;
  }
  function araeoftriangle(a, b, c) {
    var s = perimeter(a, b, c);
    return Math.sqrt(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  }
var a = prompt("Enter First side of triangle")
var b = prompt("Enter second side of triangle")
var c = prompt("Enter third side of triangle")
var area = araeoftriangle(a, b, c)
document.write("Area of triangle by give perimeter is : " + area)
document.write("<br>")
document.write("<br>")


function  getMarks() {
    var userMarks1 = prompt('Enter your marks of first subject')
    var userMarks2 = prompt('Enter your marks of second subject')
    var userMarks3 = prompt('Enter your marks of third subject')
    var add = parseInt(userMarks1) + parseInt(userMarks2) + parseInt(userMarks3)

    var average = Math.round(add / 3)
    document.write("Average Numbers : " + average +"<br>")

    var perctenage = (add / 300) * 100
document.write("Percentage : " + perctenage + "%")
}
getMarks()
document.write("<br>")
document.write("<br>")


function myIndexOf(str, char) {
    if (str === '') {
      return -1;
    }
    for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  }
  var str = 'Assallam u Aaikum';
  var char = 'u';
  var index = myIndexOf(str, char);
document.write("u is at index 8 in " + str )    
document.write("<br>")
document.write("<br>")


function deleteVowels(sentence) {
    var result = '';

    for (var i = 0; i < sentence.length; i++) {

      if (!isVowel(sentence[i])) {
        result += sentence[i];
      }
    }
  
    return result;
  }
  
  function isVowel(char) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
    return vowels.includes(char);
  }
  var sentence = 'I am here to share something new about web development';

  var result = deleteVowels(sentence);
document.write("With vowels : " + sentence )
document.write("<br>")
document.write("Without vowels : " + result)
document.write("<br>")
document.write("<br>")
  

function countVowel(sentence) {
    var result = 0;
  
    for (var i = 0; i < sentence.length - 1; i++) {
      if (isVowel(sentence[i])) {
        if (isVowel(sentence[i + 1])) {
          result++;
        }
      }
    }
    return result;
  }
  function isVowel(char) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
    return vowels.includes(char);
  }
  var sentence = 'Software Engineering is the most popular feild nowadays.';
  var vowel = countVowel(sentence);
document.write("There are " + vowel + " vowels in this sentence " + sentence)  
document.write("<br>")
document.write("<br>")
    


function convertKmToMeters(km) {
    return km * 1000;
  }
  function convertKmToFeet(km) {
    return km * 3280.84;
  }
  function convertKmToInches(km) {
    return km * 39370.08;
  }
  function convertKmToCentimeters(km) {
    return km * 100000;
}
  var km = prompt('Enter the distance in kilometers: ');
  
  var meters = convertKmToMeters(km);
  var feet = convertKmToFeet(km);
  var inches = convertKmToInches(km);
  var centimeters = convertKmToCentimeters(km);
  document.write("The distance in meter is " + meters + "m")
  document.write("<br>")
  document.write("The distance in feet is " + feet + "f")
  document.write("<br>")
  document.write("The distance in inches is " + inches + "i")
  document.write("<br>")
  document.write("The distance in centimeter is " + centimeters + "cm")
  document.write("<br>")
  document.write("<br>")


function calculateOvertimePay(hoursWorked) {
    if (hoursWorked > 40) {
      return (hoursWorked - 40) * 12;
    } else {
      return 0;
    }
  }
  var hoursWorked = prompt('Enter the number of hours worked: ');
  var overtimePay = calculateOvertimePay(hoursWorked);
  document.write("The overtime pay is Rs. " + overtimePay);
  document.write("<br>")
  document.write("<br>")


  function findCurrencyNotes(amount) {
    var notes = [0, 0, 0];
    for (var i = 0; i < notes.length; i++) {
      notes[i] = Math.floor(amount / (10 ** i));
      amount = notes[i] * (10 ** i);
    }
    return notes;
  }
  var amount = prompt('Enter the amount to be withdrawn in hundreds: ');
  var notes = findCurrencyNotes(amount);
  
  document.write("The number of 10-rupee notes is " + notes[0]);
  document.write("<br>")
  document.write("The number of 50-rupee notes is " + notes[1]);
  document.write("<br>")
  document.write("The number of 100-rupee notes is " + notes[2]);
  document.write("<br>")
  document.write("<br>")
  
  