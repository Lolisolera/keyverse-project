# JS Loops Challenges

## Challenge 1: Sum of Odd Numbers

Level: Easy
Write a function sumOfOddNumbers(n) that takes a positive integer n and returns the sum of the first n odd numbers.

```javascript
function sumOfOddNumbers(n) {
    // Your code here
    let sum = 0;
    let oddNumber = 1;

      for (let i = 0; i < n; i++) { 
        sum += oddNumber; 
        oddNumber += 2; 
    }

    return sum; 
}

console.log(sumOfOddNumbers(5)); // Output: 25 (1 + 3 + 5 + 7 + 9)
```

## Challenge 2: Reverse Digits

Level: Intermediate
Write a function reverseDigits(num) that takes a positive integer num and returns the number with its digits reversed.

```javascript
function reverseDigits(num) {
    // Your code here
let reversed = 0; // This will hold the reversed number
    while (num > 0) {
        const lastDigit = num % 10; // Extract the last digit because the reminder will always be the last digit.
        reversed = reversed * 10 + lastDigit; // algorith method to reverse the digits of a number. if a number is 12, then reversed *10 becomes 120, leaving room for a new digit on the right. This appends the last digit of the original number (last diit) to the number.
        //E.g if last digit is 3, then 120 +3 becomes 123.
        num = Math.floor(num / 10); // Remove the last digit from num
    }
    return reversed;
}

console.log(reverseDigits(12345)); // Output: 54321
    
```

## Challenge 3: Multiplication Table

Level: Easy
Write a function multiplicationTable(n, m) that prints the multiplication table of n up to m.

```javascript
function multiplicationTable(n, m) { //n refers to the multiplication table I want to print. "m" refers to the number of ties you want to iterate.
    // Your code here
     for (let i = 1; i <= m; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

multiplicationTable(3, 5);
// Output:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
```

## Challenge 4: Smallest Divisor

Level: Intermediate
Write a function smallestDivisor(num) that takes an integer num greater than 1 and returns the smallest divisor of num other than 1.

```javascript
function smallestDivisor(num) {
    // Your code here
   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return i; // Return the first divisor found
        }
    }
    return num; // If no divisor is found, num is prime, so return num itself
}

console.log(smallestDivisor(15)); // Output: 3
console.log(smallestDivisor(17)); // Output: 17 (Prime number)
```

## Challenge 5: Check If a Number is Prime

Level: Intermediate

Write a function isPrime(num) that takes a positive integer num and returns true if it is a prime number and false otherwise. Use a loop to check divisibility.

Example:
num =7 → true (7 is only divisible by 1 and itself).
num =10 → false (10 is divisible by 1, 2, 5, and 10).

```javascript
function isPrime(num) {
    // Your code here
      if (num <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    
    // Loop from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // num is divisible by i, so it's not prime
        }
    }
    
    return true; // If no divisors were found, num is prime
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(2)); // Output: true
console.log(isPrime(1)); // Output: false
```
