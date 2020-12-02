/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


document.getElementById("demo").innerHTML = "Hello World!";
function changeText(id) {
  id.innerHTML = "BOOO!";
}
  function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
document.getElementById("myBtn").addEventListener("click", displayDate);

function myFunction() {
  alert("Hello world!");
}