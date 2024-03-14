// 1. Write a JS function to find the longest word in a sentence using a function.

//     Sample Input:
//     const sentence = 'The quick brown fox jumps over the lazy dog';
//     console.log(findLongestWord(sentence));

//     Sample Output: quick

const sentence = 'The quick brown fox jumps over the lazy dog';

function findLongestWord(str) {
    let words = str.split(' ')
    let maxlen = 0;
    let lonword = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxlen) {
            maxlen = words[i].length;
            lonword = words[i]
        }
    }
    return lonword
}

console.log(findLongestWord(sentence));

// 2. Write a JS function to find the area and perimeter of a Circle.

//     Sample Input: console.log(circleValues(10))

//     Sample Output: "Perimeter: 62.83, Area: 314.15"
// const pi = 3.147

function circleValues(r) {
    let perimeter = (Math.PI * r * r).toFixed(2);

    let area = (2 * (Math.PI * r)).toFixed(2);

    return `"Perimeter: ${perimeter}, Area: ${area}"`
}

// 3. Write a JS function to generate a random number

//     Sample Input: console.log(genRandom(1,10))

//     Sample Output: // random int between 1 to 10

function genRandom(start, end) {

    let num = Math.floor((Math.random() * end) + start);
    return num;
}

// 4. Write a function to find the count of a letter in a string

//     Sample Input: console.log(letterCount("Connect",'c'))

//     Sample Output: 2

function letterCount(str, letter) {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            count++;
        }
    }
    return count;
}

// 5. Write a JS program to check an Armstrong number of three digits using function. (Take input from the user)

//     Sample Input: 153

//     Sample Ouput: 153 is an Armstrong number

// NOTE: An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
// For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

function isArmstrong(number) {
    let sum = 0;
    let power = 0;
    let temp = number;


    const number = prompt('Enter a three-digit positive integer: ');

    while (temp > 0) {
        temp = Math.floor(temp / 10);
        power++;
    }

    temp = number;

    while (temp > 0) {

        let remainder = temp % 10;

        sum += Math.pow(remainder, power);


        temp = parseInt(temp / 10);
    }

    if (sum == number) {
        console.log(number+" is an Armstrong number")
    } else {
        console.log(number+" is not an Armstrong number")
    }
}

isArmstrong(153);