// This is where the magic happens! We check if it's a palindrome or not.
function palindrome(str) {
  // First, clean up the input (remove any non-alphanumeric characters)
  const cleanedInput = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Reverse the cleaned input and check if it's the same as the original cleaned version
  const reversedInput = cleanedInput.split('').reverse().join('');
  
  return cleanedInput === reversedInput; // Return true if it's a palindrome, false if not
}

// When the user clicks the "Check" button, this function gets triggered
function checkPalindrome() {
  // Get the value that the user has typed in
  const userInput = document.getElementById('input-text').value;

  // Let's check if it’s a palindrome
  const isPalindrome = palindrome(userInput);

  // Get the result container to show the outcome
  const resultElement = document.getElementById('result');
  
  // Provide feedback to the user
  if (userInput.trim() === '') {
    resultElement.textContent = "❗ Oops! Please type something.";
    resultElement.style.color = "#ffb3b3"; // Soft red to indicate an issue
  } else {
    // Success or failure based on the result
    resultElement.textContent = isPalindrome ? "✅ It's a Palindrome!" : "❌ Nope, it's not a palindrome.";
    resultElement.style.color = isPalindrome ? "#b9fbc0" : "#ffadad"; // Green for success, red for failure
  }
}







/*
// This is where the magic happens! We check if it's a palindrome or not.
function palindrome(str) {
  // First, clean up the input (remove any non-alphanumeric characters)
  const cleanedInput = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Reverse the cleaned input and check if it's the same as the original cleaned version
  const reversedInput = cleanedInput.split('').reverse().join('');
  
  return cleanedInput === reversedInput; // Return true if it's a palindrome, false if not
}

// When the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the button and add click event listener
  document.getElementById('check-btn').addEventListener('click', function() {
    // Get the value that the user has typed in
    const userInput = document.getElementById('text-input').value;

    // Check if input is empty
    if (userInput.trim() === '') {
      alert('Please input a value');
      return;
    }

    // Let's check if it's a palindrome
    const isPalindrome = palindrome(userInput);

    // Get the result container to show the outcome
    const resultElement = document.getElementById('result');
    
    // Format the result according to the test requirements
    if (isPalindrome) {
      resultElement.textContent = `${userInput} is a palindrome`;
    } else {
      resultElement.textContent = `${userInput} is not a palindrome`;
    }
  });
});
*/
