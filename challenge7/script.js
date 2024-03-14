
// 1. Write a function named assignGrade that takes 1 argument, a number score and returns a grade for the score, 
// either "A", "B", "C", "D", or "F".
function assignGrade(num) {

    if (num > 90 && num <= 100) {
        console.log('A')
    }
    else if (num > 80 && num <= 90) {
        console.log('B')
    }
    if (num > 70 && num <= 80) {
        console.log('C')
    }
    if (num > 60 && num <= 70) {
        console.log('D')
    }
    if (num > 40 && num <= 60) {
        console.log('E')
    }
    if (num >= 35 && num <= 50) {
        console.log('F')
    }
}

assignGrade(95)

// 2. Create a function findTriangleType() that finds the type of the triangle for given side values by 
// using “==” and “&&” operator in JavaScript.
// - Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// - Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// - Else “Scalene triangle.” since values of all sides are unequal.

function findTriangleType(side1, side2, side3) {

    if (side1 == side2 && side2 == side3) {
        console.log('Equilateral triangle')
    }
    else if (side1 == side2 || side2 == side3) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle')
    }
}

findTriangleType(12, 12, 12)


// 3. Create a function checkInRange() that finds if the given number is within the provided start and end range 
// using >=, <= and && operators in JavaScript.

// - Print “Between the range” if num is between start and end values
// - Else Print “Outside the range” since num is outside start and end values.

function checkInRange(num, start, end) {

    if (num >= start && num <= end) {
        console.log("Between the range");
    } else {
        console.log("Outside the range");
    }
}

checkInRange(56, 200, 70);

// 4. Write a switch statement that checks the value of the variable dayOfWeek and prints out a message based on the day.

let day = 'Monday'

switch(day){

    case 'Monday':
        console.log("It's Monday, the start of the week.")
        break
    case 'Tuesday':
        console.log("It's Tuesday, the second day of the week.")
        break
    case 'Wednesday':
        console.log("It's Wednesday, the third day of the week.")
        break
    case 'Thuersday':
        console.log("It's Thuersday, the fourth day of the week.")
        break
    case 'Friday':
        console.log("It's Friday, the fifth day of the week.")
        break
    case 'Saturday':
        console.log("It's Saturday, the end of the week.")
        break
    case 'Sunday':
        console.log("It's Sunday, the Holiday of the week.")
        break
    default :
        console.log('Please Check day .... Enter Day Properly ')
}


// 5. Write a switch statement that checks the value of the variable operator and performs a mathematical operation on 
//    the variables num1 and num2.

let num1 = 10;
let num2 = 20;

let operator = '+';

switch(operator){
    case '+':
        console.log(num1 + num2)
        break
    case '-':
        console.log(num1 - num2)
        break
    case '/':
        console.log(num1 / num2)
        break
    case '*':
        console.log(num1 * num2)
        break
    case '%':
        console.log(num1 % num2)
        break

}