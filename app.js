// app.js
document.getElementById('inputText').addEventListener('input', function () {
  const inputText = this.value;
  const resultDiv = document.getElementById('result');
  
  if (inputText.length === 0) {
    resultDiv.textContent = "Please type something!";
  } else {
    // Example of simple logic
    resultDiv.textContent = `You typed: ${inputText}`;
  }
});
