var mainContent = document.getElementById("main-content");


//ii. To display all child elements of the "main-content" element:
console.log(mainContent.children);


//iii. To get all elements of class "render" and show their innerHTML in the browser:
var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

//iv. To fill the input value whose element id is "first-name" using JavaScript:
document.getElementById("first-name").value = "Alex";


//v. To repeat part iv for id "last-name" and "email":
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";


// 2. use HTML code of question 1 and show the result on browser
// i. The node type of the element having id "form-content" is an HTMLDivElement.
var formContent = document.getElementById("form-content");
console.log(formContent.nodeType); // Output: 1


//ii. The node type of the element having id "lastName" is an HTMLParagraphElement, and its child node type is a Text node.
var lastName = document.getElementById("lastName");
console.log(lastName.nodeType); // Output: 1
console.log(lastName.childNodes[0].nodeType); // Output: 3


//iii. To update the child node of the element having id "lastName":
lastName.childNodes[0].nodeValue = "New Last Name";


//iv. To get the first and last child of id "main-content":

var mainContent = document.getElementById("main-content");
console.log(mainContent.firstChild); // Output: <p class="render"> First Name : Alex</p>
console.log(mainContent.lastChild); // Output: <p class="render"> contact : +92 300 1234567</p>


//v. To get the next and previous siblings of id "lastName":

console.log(lastName.nextSibling); // Output: <p class="render"> Email : alexbank@example.com</p>
console.log(lastName.previousSibling); // Output: <p class="render"> First Name : Alex</p>


//vi. To get the parent node and node type of the element having id "email":

var email = document.getElementById("email");
console.log(email.parentNode); // Output: <div id="form-content" class="content">...</div>
console.log(email.nodeType); // Output: 1
