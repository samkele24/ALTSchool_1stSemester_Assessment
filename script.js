// Initialize a variable to store the current input
let currentInput = '';

// Append a value to the current input (called when a button is clicked)
function appendToResult(value) {
  currentInput += value; // Add the value to the current input string
  document.getElementById('result').value = currentInput; // Update the display with the new input
}

// Clear the current input (called when the "C" button is clicked)
function clearResult() {
  currentInput = ''; // Reset the current input to an empty string
  document.getElementById('result').value = ''; // Clear the display
}

// Calculate the result of the current input (called when the "=" button is clicked)
function calculateResult() {
  try {
    // Try to evaluate the input using JavaScript's eval() function
    currentInput = eval(currentInput).toString(); // Evaluate the expression and convert it to a string
    document.getElementById('result').value = currentInput; // Update the display with the result
  } catch (error) {
    // If an error occurs (e.g., invalid input), show "Error" and reset the input
    document.getElementById('result').value = 'Error';
    currentInput = ''; // Reset the input
  }
}

// Remove the last character from the current input (called when the "←" button is clicked)
function backspace() {
  currentInput = currentInput.slice(0, -1); // Remove the last character
  document.getElementById('result').value = currentInput; // Update the display with the new input
}

// Optional: Listen for keyboard events to control the calculator with the keyboard
document.addEventListener('keydown', (event) => {
  const key = event.key; // Get the key that was pressed
  if (/[0-9+\-*/.=]/.test(key)) { // If the key is a valid character (digit or operator)
    appendToResult(key); // Append it to the input
  } else if (key === 'Enter') { // If the "Enter" key is pressed
    calculateResult(); // Calculate the result
  } else if (key === 'Backspace') { // If the "Backspace" key is pressed
    backspace(); // Remove the last character
  } else if (key === 'Escape') { // If the "Escape" key is pressed
    clearResult(); // Clear the input
  }
});
