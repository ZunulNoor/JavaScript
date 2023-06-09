function displayFormData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    document.getElementById("form-data").innerHTML =
      "<p>Name: " + name + "</p>" +
      "<p>Email: " + email + "</p>" +
      "<p>Password: " + password + "</p>";
  }

function readmore() {
    document.getElementById("offline").innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eum deleniti blanditiis. Rem alias aliquam cupiditate nobis maiores a numquam omnis quibusdam ea, vel quos praesentium dolorem debitis explicabo animi."
}
 
function deleteElement(elementId) {
    var element = document.getElementById(elementId);
    element.remove(elementId)
}
var students = [];

function addStudent() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var grade = document.getElementById('grade').value;

  var student = { name: name, age: age, grade: grade };
  students.push(student);

  displayStudents();
  clearForm();
}
function displayStudents() {
  var table = document.getElementById('studentTable');

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (var i = 0; i < students.length; i++) {
    var student = students[i];

    var row = table.insertRow(i + 1);
    var nameCell = row.insertCell(0);
    var ageCell = row.insertCell(1);
    var gradeCell = row.insertCell(2);
    var actionsCell = row.insertCell(3);

    nameCell.innerHTML = student.name;
    ageCell.innerHTML = student.age;
    gradeCell.innerHTML = student.grade;
    actionsCell.innerHTML = '<button onclick="editStudent(' + i + ')">Edit</button> <button onclick="deleteStudent(' + i + ')">Delete</button>';
  }
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function editStudent(index) {
  var student = students[index];
  document.getElementById('editRowId').value = index;
  document.getElementById('editName').value = student.name;
  document.getElementById('editAge').value = student.age;
  document.getElementById('editGrade').value = student.grade;

  showEditForm();
}

function saveEditedStudent() {
  var index = document.getElementById('editRowId').value;
  var student = students[index];

  student.name = document.getElementById('editName').value;
  student.age = document.getElementById('editAge').value;
  student.grade = document.getElementById('editGrade').value;

  hideEditForm();
  displayStudents();
}

function cancelEdit() {
  hideEditForm();
}

function showEditForm() {
  document.getElementById('editForm').style.display = 'block';
}

function hideEditForm() {
  document.getElementById('editForm').style.display = 'none';
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('grade').value = '';
}