function deleteElement(elementId) {
    var element = document.getElementById(elementId);
    element.remove(elementId)
  }
  
  var counter = 0;
  function increase() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
  }
  function decrease() {
    if (counter > 0) {
      counter--;
      document.getElementById("counter").innerHTML = counter;
    }
  
  }
  