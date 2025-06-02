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
