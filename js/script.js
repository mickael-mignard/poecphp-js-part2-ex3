// Get input element
let inputLastName = document.getElementById("lastname");

// Add on input an event listener on keyup to display the character typed
inputLastName.addEventListener("keyup", function(){
   alert(inputLastName.value);  
})