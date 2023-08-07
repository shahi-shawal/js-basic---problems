function thePrimeNumber(arr) {
    if (!Array.isArray(arr)) {
        return "Please provide a numbers of array"  
    }
     let primes= [];
    for (const item of arr) {
        if (item > 1) {
            let isPrime= true;
            for (let i = 2; i < item; i++) {
                if (item % i === 0) {
                   isPrime = false 
                   break;
                } 
        }
        if (isPrime===true) {
            primes.push(item)
        }       
        }
        
    }

    return primes
}


let arr= [2,3,4,5.6,7,8,9,11,12,16]
console.log(thePrimeNumber(arr));



// chat gtp 

// Function to check if a number is prime
function isPrime(num) {
      if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Function to find prime numbers in an array
  function findPrimeNumbers(arr) {
    const primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primeNumbers.push(arr[i]);
      }
    }
    return primeNumbers;
  }
  
  // Example usage
  const numbers = [3,4,5,6,7 ,8, 10];
  const primeNumbers = findPrimeNumbers(numbers);
  console.log(primeNumbers); // Output: [2, 3, 5, 7]
  