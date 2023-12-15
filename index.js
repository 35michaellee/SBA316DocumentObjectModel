
// Check if the element is found

// function changeColor(){
//     alert('Button clicked!');
// }
function changeColor() {
    var div = document.getElementById("clickable"); // can a modulize this somehow ?
    var colors = ["red", "green", "blue"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    div.style.backgroundColor = randomColor;
  }
document.getElementById('clickable').onclick=changeColor;

// Cache a NodeList 
const boxes = document.querySelectorAll('.box');

//loop through
boxes.forEach(function(box) {
    // Add an event listener to each element
    box.addEventListener('click', function() {
        alert('Element clicked!');
    });
});

//add new suprise information 

// let infoparent= document.getElementById('descriptions');

//  button.addEventListener('click', function(){
//     //add dom manipulation functions 
//  })


let domFunctions = [
    'document.getElementById("myElement")',
    'document.createElement("p")',
    'element.appendChild(childElement)',
    'element.removeChild(childElement)',
    'element.setAttribute("class", "newClass")',
    'element.addEventListener("click", myFunction)'
    
];

// Create a DocumentFragment for 5% of grade :(
let fragment = document.createDocumentFragment();

// Create a div to hold the list
let listContainer = document.createElement('div');

// Loop through the functions and create list items
domFunctions.forEach(function(domFunction) {
    let listItem = document.createElement('p');
    listItem.textContent = domFunction;
    listContainer.appendChild(listItem);
});

// Clone the listContainer and append it to the DocumentFragment
fragment.appendChild(listContainer.cloneNode(true));

// Get the target container div and the seret title to hide them 
let containerDiv = document.getElementById('domFunctionsContainer');
let secretTitle= document.getElementById('secretTitle');

containerDiv.style.display = 'none';
secretTitle.style.display='none';

// Append the DocumentFragment to the container div
containerDiv.appendChild(fragment);
// Add a click event listener to the button
let secretButton=document.getElementById('secretButton');
secretButton.addEventListener('click', function() {
    // Toggle the visibility of the container
    secretTitle.style.display = secretTitle.style.display === 'none' ? 'block' : 'none';
    containerDiv.style.display = containerDiv.style.display === 'none' ? 'block' : 'none'; //using help form internet here . 
});



  // Create a new paragraph element with the date 
  let newP = document.createElement('p');
  newP.setAttribute('id',"date")
  let newDate= new Date();

  

  // Set the text content of the paragraph
  newP.textContent = 'You have visited the site at: '+ newDate;

  // Append the new paragraph to the body of the document
  document.body.appendChild(newP);


// add a button listener for the date
let dateButton = document.getElementById('dateUpdateButton');
dateButton.addEventListener('click', function() {
    let newDate= new Date();
    newP.textContent = 'You have visited the site whoop: '+ newDate;
    //console.log("hello works");
});
let learnMoreButton = document.getElementById('learnMoreButton');
learnMoreButton.addEventListener('click', function() {
    // Open MDN website in a new tab
    window.open('https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', '_blank');
});