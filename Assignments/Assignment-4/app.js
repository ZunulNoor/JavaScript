var variable = "Variable \n user , userName , user_name"
alert(variable)

var legalVariable = "Legal \n $user , _user , user_ , userName , user_name"
alert(legalVariable)

var illegalVariable = "Illegal \n 5 , 3user , -user , #user , user name"
alert(illegalVariable)

document.write("<h2>Rule for naming JS variables</h2>")

var firstRule = "Variable names can only contain $, _ and number.For example $my_1stVariable"
document.write(firstRule)
document.write("<br>")

var secondRule = "Variables must begin with a $ or _ . For example $name, _name or name"
document.write(secondRule)
document.write("<br>")


var thirdRule = "Variable names are case sensitive."
document.write(thirdRule)
document.write("<br>")

var fourthRule = "Variable names should not be JS keywords."
document.write(fourthRule)
document.write("<br>")