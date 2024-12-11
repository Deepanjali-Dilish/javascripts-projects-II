function isPalindrome(str) {
  
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

   
    let reversedStr = cleanedStr.split('').reverse().join('');

    if (cleanedStr === reversedStr) {
        return true;
    } else {
        return false; 
    }
}

let inputString = "A man, a plan, a canal, Panama"; 

if (isPalindrome(inputString)) {
    console.log(`"${inputString}" is a palindrome.`);
} else {
    console.log(`"${inputString}" is not a palindrome.`);
}


function isArmstrongNumber(num) {
  
    const strNum = num.toString();
    const numDigits = strNum.length;
    
    let sum = 0;
    
    for (let i = 0; i < numDigits; i++) {
        let digit = parseInt(strNum[i]);
        sum += Math.pow(digit, numDigits);
    }
    
    return sum === num;
}


const number = 153; 
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}


function decimalToBinary(decimal) {
   
    return decimal.toString(2);
}


const decimalNumber = 10; // 1010
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(`The binary representation of ${decimalNumber} is ${binaryRepresentation}`);


function gcd(a, b) {

    while (b !== 0) {
       
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a; 
}


const num1 = 56;
const num2 = 98; 
const result = gcd(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is ${result}`); // 14



function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b); 
}

const num1 = 12; 
const num2 = 15; 
const result = lcm(num1, num2);
console.log(`The LCM of ${num1} and ${num2} is ${result}`); // 60




function factorial(n) {
   
    if (n === 0 || n === 1) {
        return 1;
    }
    )
    return n * factorial(n - 1);
}

const number = 5; 
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`); // 120


function isPalindrome(str) {
    
   
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}


const inputString = "A man a plan a canal Panama";
if (isPalindrome(inputString)) {
    console.log(`"${inputString}" is a palindrome.`);
} else {
    console.log(`"${inputString}" is not a palindrome.`);
}


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function simplifyFraction(numerator, denominator) {
    
    const divisor = gcd(numerator, denominator);

   
    return {
        numerator: numerator / divisor,
        denominator: denominator / divisor
    };
}

const numerator = 36;   
const denominator = 60;

const simplified = simplifyFraction(numerator, denominator);
console.log(`The simplified fraction of ${numerator}/${denominator} is ${simplified.numerator}/${simplified.denominator}`);
// 3/5


function palindrome(str) {
    let reversedStr = "";  
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];  
    }

    return reversedStr === str;  
}

const str = "malayalam";
const result = palindrome(str);

console.log(result); 
