const makeChange = (c) => {
  // Define the values of each coin
  const quarterValue = 0.25;
  const dimeValue = 0.10;
  const nickelValue = 0.05;
  const pennyValue = 0.01;

  // Initialize variables to store the number of each coin
  let q = 0, d = 0, n = 0, p = 0;

  // Convert the input string to a number
  const amount = parseFloat(c);

  // Check if the input is a valid number
  if (isNaN(amount) || amount <= 0 || amount >= 100) {
    return { error: "Invalid input. Please enter a positive number less than 100." };
  }

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
  p = Math.round(amount / pennyValue);

  // Create and return the result object
  const result = { q, d, n, p };
  return result;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));


