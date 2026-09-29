// Check whether a number is prime (while loop)
let num = 29;
let isPrime = num > 1;
let i = 2;

while (i <= Math.sqrt(num)) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
  i++;
}

console.log(num + (isPrime ? " is prime" : " is not prime"));