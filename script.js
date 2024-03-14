// Classes and Objects

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

// creating object
const obj = new Animal('cat')

// calling method
obj.speak()

import {add, sub} from './app.js'

console.log(add(2,3))
console.log(sub(7,3))

// call stack

// Call Stack is a data structure for javaScript interpreters to keep track 
// of function calls in program.

// It has two major actions-
// Whenever you call a function for its excution, you are pushing it to the stack.
// Whenever the execution is completed, the function is popped out of the stack.

function name(){
    return print()
}

function print(){
    return 'My name is John'
}

console.log(name())

// - add the name() to call stack list and execute the code
// - add the print() to call stack and execute the code
// - delete the print() from call stack 
// - delete the name() from call stack

// Create function that takez a string as input and 
// returns true if it is palindrom.

function isPalindrom(str){
   
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr
    
}

console.log(isPalindrom('MOM'))