
 var text = document.getElementById("text");
 var zoomInBtn = document.getElementById("zoomin");
 var zoomOutBtn = document.getElementById("zoomout");
 
 zoomInBtn.addEventListener("click", 
 function() {
   var fontSize = parseInt(window.getComputedStyle(text).fontSize);
   text.style.fontSize = (fontSize + 10) + "px";
 });
 
 zoomOutBtn.addEventListener("click",
  function() {
   var fontSize = parseInt(window.getComputedStyle(text).fontSize);
   text.style.fontSize = (fontSize - 10) + "px";
 });

var showImageButton = document.getElementById("show-image-button");
     var myImage = document.getElementById("my-image"); 
      showImageButton.addEventListener("click", () => { 
         myImage.style.display = "block"; 
      });


function openModal(imageSrc) {
   var modal = document.getElementById('modal');
   var modalImage = document.getElementById('modal-image');
   modalImage.src = imageSrc;
   modal.style.display = 'block';
 }

 function closeModal() {
   var modal = document.getElementById('modal');
   modal.style.display = 'none';
 } 

//  var text = document.getElementById("text");
//  var zoomInBtn = document.getElementById("zoomin");
//  var zoomOutBtn = document.getElementById("zoomout");
 
//  zoomInBtn.addEventListener("click", 
//  function() {
//    var fontSize = parseInt(window.getComputedStyle(text).fontSize);
//    text.style.fontSize = (fontSize + 10) + "px";
//  });
 
//  zoomOutBtn.addEventListener("click",
//   function() {
//    var fontSize = parseInt(window.getComputedStyle(text).fontSize);
//    text.style.fontSize = (fontSize - 10) + "px";
//  });