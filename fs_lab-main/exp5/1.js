// Print prime numbers from 1 to 100 (for loop)
for (let n = 2; n <= 100; n++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(n);
}