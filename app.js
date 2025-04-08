// app.js

// Function to handle the button click
function handleButtonClick() {
  const inputText = document.getElementById('inputText').value; // Get the value from the input
  const resultDiv = document.getElementById('result'); // Get the result div
  
  var result = getResult(inputText);
  
  resultDiv.textContent = result; // Display the result
}

function getResult(key) {
	const answers = {
    "key1": "Answer for key 1.",
    "key2": "Answer for key 2.",
    "key3": "Answer for key 3.",
    "key4": "Answer for key 4."
  };

  // Return the corresponding answer based on the key, or the default if not found
  return answers[key] || "Cod incorect.";
}

// Add an event listener to the button
document.getElementById('submitButton').addEventListener('click', handleButtonClick);
