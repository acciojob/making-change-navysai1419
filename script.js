const makeChange = (c) => {
  // Define the values of each coin
  const quarterValue = 0.25;
  const dimeValue = 0.10;
  const nickelValue = 0.05;
  const pennyValue = 0.01;

  // Initialize variables to store the number of each coin
  let q = 0, d = 0, n = 0, p = 0;

  // Calculate the number of quarters
  q = Math.floor(c / quarterValue);
  c %= quarterValue;

  // Calculate the number of dimes
  d = Math.floor(c / dimeValue);
  c %= dimeValue;

  // Calculate the number of nickels
  n = Math.floor(c / nickelValue);
  c %= nickelValue;

  // The remaining amount is the number of pennies
  p = Math.round(c / pennyValue);

  // Create and return the result object
  const result = { q, d, n, p };
  return result;
}
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
