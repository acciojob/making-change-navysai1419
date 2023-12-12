const makeChange = (c) => {
  // Define the values of each coin
  const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  // Convert the input string to a number
  const amount = parseInt(c);

  // Check if the input is a valid number
  if (isNaN(amount) || amount <= 0 || amount >= 100) {
    return { error: "Invalid input. Please enter a positive number less than 100." };
  }

  // Initialize variables to store the number of each coin
  let q = 0, d = 0, n = 0, p = 0;

  // Calculate the number of quarters
  q = Math.floor(amount / quarterValue);
  amount %= quarterValue;

  // Calculate the number of dimes
  d = Math.floor(amount / dimeValue);
  amount %= dimeValue;

  // Calculate the number of nickels
  n = Math.floor(amount / nickelValue);
  amount %= nickelValue;

  // The remaining amount is the number of pennies
  p = amount;

  // Create and return the result object
  return { q, d, n, p };
};

// Do not change the code below
const userInput = prompt("Enter the amount in cents: ");
alert(JSON.stringify(makeChange(userInput)));
