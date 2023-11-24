// Creating a variable 'type' and getting the element by its id 'type'
let type = document.getElementById("type");

// Getting all buttons and storing them in the 'buttons' variable
buttons = document.querySelectorAll("button");

// Creating a variable 'typeValue' to store the input value
let typeValue = "";

// Using a for loop to iterate over each button
for (item of buttons) {
 
  // Adding a click event listener to each button
  item.addEventListener("click", (a) => {
 
    // Extracting the text content of the clicked button
    buttonText = a.target.innerText;

    // Logging the text content of the clicked button to the console
    console.log("Button Text is", buttonText);

    // Checking specific conditions based on the button text
    if (buttonText == "x") {
 
      // Replacing 'x' with '*' for multiplication
      buttonText = "*";
 
      // Updating the 'typeValue' and the input field value
      typeValue += buttonText;
      type.value = typeValue;
 
    }
     else if (buttonText == "AC") {
    
      // Clearing the input field and resetting 'typeValue'
      typeValue = "";
      type.value = typeValue;
    
    }
     else if (buttonText == "=") {
    
      // Evaluating the expression and updating the input field with the result
      type.value = eval(typeValue);
    
    }
     else {
    
      // Concatenating the button text to 'typeValue' and updating the input field
      typeValue += buttonText;
      type.value = typeValue;
    }
  });
}
