
// 1. Write a JS program to find the factorial of a number.

function factorial(num) {
    if (num >= 1) {
        return num * factorial(num - 1);
    }
    else
        return 1
}

factorial(5);

// Sample Input: factorial(5)
// Sample Output: 120

// 2. Write a JS program using the for...in loop to iterate over the properties of an object.

const obj = {
    name: 'Jhon',
    age: '26',
    address: 'Hyd'
}

for (ele in obj) {
    console.log(ele + "  " + obj[ele]);
}


// 3. Write a JS program to find the power of a number using for loop

var pow = function power(base, exponent) {
    var result = 1;
    if (exponent == undefined) {
        exponent = 2;
    }
    for (var i = 1; i <= exponent; i++) {
        result = result * base;
    }
    return result;
}

pow(4, 3)

// Sample Input: numPower(4,3)
// Sample Output: 64

// 4. Write a JS program to find the no of digits in a number

const numberOfDigits = (n) => { 
    let count = 0; 
    while (n > 0) { 
        n = Math.floor(n / 10); 
        count++; 
    } 
    return count; 
}
console.log(numberOfDigits(234));


// Sample Input: digitCount(8367)
// Sample Output: 4

// 5. Write a JS program to print a pyramid star pattern.

//     *
//    ***
//   *****
//  *******
// *********

for(let i = 1; i <= 5; i++){

    for(let j = 1; j <= (2*i -1); j++){
        console.log('*');
    }
    console.log()
}

// 6. Write a JS program to find the smallest number in an array.

const nums1 = [10,20,21,12,4];
let min;
let max;

min = max = 0;

function findSmallestNumber(nums){

    if(nums[0] < nums[1]){
        min = nums[0]
        max = nums[1]
    } else{
        mix = nums[0]
        min = nums[1]
    }
    
    for(let j of nums){
        if(j < min){
            min = j;
        } 
        if(j > max){
            max = j;
        }
    }

    console.log(min);
}

findSmallestNumber(nums1);

// Sample Input: findSmallestNumber([10,20,21,12,4])
// Sample Output: 4