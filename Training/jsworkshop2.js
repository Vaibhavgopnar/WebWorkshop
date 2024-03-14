// let name1 = 'Allen';

// console.log(name1.length);

// console.log(name1[0])

// let str = 'My name is "john"'
// console.log(str)

// let str2 = `line1
//             line2
//             line3`
// console.log(str2);

// let firstname = "john";
// let lastname = "doe";

// let fullname = `Hi ${firstname} ${lastname} `

// console.log(fullname);

// let areEqual = firstname === lastname;

// console.log(areEqual);

// let elegibility;
// let age = 21
// if (age >= 18) {
//     elegibility = 'votable age'
//     console.log(elegibility)
// } else {
//     console.log('Not votable')
// }

// let num = 40;

// if (num > 50) {
//     console.log("Greater than 20");
// }
// else {
//     console.log("smaller than 20");
// }

// //switch

// let month = 'sep';

// switch (month) {
//     case 'jan': case 'march': case 'may': case 'jul': case 'aug': case 'oct': case 'dec':
//         console.log("31 days");
//         break;
//     case 'feb':
//         console.log("28 or 29 days");
//         break;
//     case 'apr': case 'jun': case 'sep': case 'nov':
//         console.log("30days");
//         break;
//     default:
//         console.log("Default case executed");
// }

// //  Create a function `checkInRange()` that finds if the given number is within the provided start and end range using >=, <= and && operators in JavaScript.

// // - Print “Between the range” if num is between start and end values
// //     - Else Print “Outside the range” since num is outside start and end values.



// function checkInRange(n, start, end) {

//     if(n >= start && n <= end){
//         console.log("Between the range");
//     } else{
//         console.log("Outside the range");
//     }
// }

// checkInRange(56,200,70);

let colors = ["red", "green","blue"]

// let arr1 = [12,"vaibhav",true]
let array2 = []

console.log(typeof array2)

const numbers = [10,20,30,40,50];

console.log(numbers[2])
console.log(numbers.length)
console.log(numbers)
numbers.push(60)
console.log(numbers)

numbers.unshift(70)
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.shift()
console.log(numbers)

const obj1 = {
    name: "vaibhav",
    age : 23
}

console.log(obj1.name + " "+obj1.age);

// for loop

let n = 10;

for(let i = 0; i <= n; i++){
    console.log(i);
}

let arr1 = [12,"vaibhav",true]

for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

let i = 1;
// while( i <= 5){
//     console.log(i);
//     i++;
// }

do{
    console.log(i);
    i++;
}while(i < 5);

let color = ["red", "green", "blue"];

let col;
for(col of color){
    console.log(col);
    console.log(col.length);
    
}

const person = {
    name : "vaibhav",
    city : 'Latur',
    age : 23
}

for(let key in person){
    console.log(key + " "+ person[key])
}

const nums = [31,22,13,46,15];
let sum = 0;

nums.forEach ((ele) => {
    console.log(ele)
    sum += ele
})

console.log(sum)

const newarray = nums.map((num) => num + 3)

console.log(newarray)
console.log(nums)

const nums1 = [31,22,13,46,77,15];

let min
let max

min = max = 0;
if(nums1[0] < nums1[1]){
    min = nums1[0]
    max = nums1[1]
} else{
    mix = nums1[0]
    min = nums1[1]
}

for(let j of nums1){
    if(j < min){
        min = j;
    } 
    if(j > max){
        max = j;
    }
}

console.log(nums1)
console.log(min)
console.log(max)






