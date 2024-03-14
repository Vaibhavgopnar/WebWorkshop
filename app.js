
// // 1. What is HTML ?
// //     --> HTML stands Hypertext markup language.It is the standard markup language used for creating web pages and defining their structure and content.

// // 2. what is the latest version of HTML and its key features ?
// //     --> HTML5

// //     - sementic elements
// //     - multimedia elements(video and audio)
// //     - new input types
// //     - web Storage
// //     - <figure>, <figcaption> 

// // 3. input type of HTML.
// // --> Date, email, number, range, search, url, color, time etc.

// // 4. what are the different types of elements in HTML.
// // --> heading h1 to h6
// // paragraph lists
// // images
// // links
// // tables
// // forms

// // 5. What is the purpose of the < !DocTYPE > declareation ?
// //     --> The < !DOCTYPE > declaration is used to specify the version of that web page is Written
// //         in .It helps the browser to interpret and render the page correctly. 

// // 6. what is the role of tags and attributes in HTML.?
// //     --> p elements, <img src=""></img>
// //     tags are used to mark up and define element in HTML, while attribte provide additional information about those elements.


// // 7. what is the block level and inline level elements in HTML
// // --> block level element are those that create a block on the webpage and they typically starts with a new line.Examples - div p h1 ul etc
// // Inline elements on the other hand do not create new blocks and they appear in the same line.Examples - StereoPannerNode, a, strong etc 

// // 8. what are the tables in HTML ?
// //     --> the table element is used to create tables that display tabular data. table consist of rows(tr) and cells (td for data cells) and th for table header cells.
// //     <table>
// //         <tr> // row
// //             <th>Name</th>  // heading
// //         </tr>
// //         <tr>
// //             <td>jhon</td> // cell
// //         </tr>
// //     </table>

// // 9. what is the concept of semantic element. 
// // --> semantic html elements convey meaning and describe structure of the content rather than just formating. 
// // by using semantic elements like header, nav, section, aside, main and footer, it becomes easier for search engines to understand and navigate the web page. 

// // 10. what is the purpose of the attribute of the attribute in the img tag. 
// // --> the alt attribute in the img tag is used to provide alternative text for the image.it is displayed if the image cannot be loaded, allowing the screen readers to describe the image to visually impaired users 

// // 11. how can you write a hyperlink in html 
// // -> To create hyperlink you can use anchor element.the href attribute is used to specify the URL or destination of the link. 
// //      <a href="//url">link</a>

// // 12. what is the target attribute used for in a tag. 
// // --> the target attribute is used to specify how the linked content should be opened when clicked
// // common value used : "_blank" to open the link in new tab.

// // 13. what are meta tags in html?
// // --> meta tags are HTML tags that are provide information about a web page to search engine, web browsers, and other web services. They are included in the <head> section of an HTML document and do not affect the visual appearence of the page. 
// //     Meta tags are used to provide metadata such as the title, descreption, author, and keywords of the page. They can also specify other information such as the character set used thby the page, the viewport settings for mobile devices, and whether the page should be indexed by search engines.
        
// //     some common meta tags :
// //     <meta charset="utf-8">
// //         specify the character set used by the page.

// //     <meta name="description" content="..."></meta>
// //         provides a brief description of the page for search engines and social media sharing
    
// //     <meta name="viewport" content="width-device-width, initial-scale-1.0"
// //         sets the viewport settings for mobile devices


// // 14. What is void element in HTML.
// // --> HTML elements which do not have closing tags or not need to be closed are void elements.
// // Example : img,br,href

// // 15. what are lists types in HTML?
// // --> -Ordered list : The Ordered list displays the element in a numbered format
// //     <ol>
// //         <li>....</li>
// //     </ol>
// //     -Unordered list - The ul list displays the elements in a bulleted format.
// //     <ul>
// //         <li>.....</li>
// //     </ul>
// //     - definition list - the definition list displays the elements in a definition form.
// //     <dl>
// //         <dt>title</dt>
// //         <dd>description</dd>
// //     </dl>

// // What is first class function?

// // first class function means when functions are treated loke any other variable.
// //For example 

// function add() {
//     let a = 3;
//     let b = 4;
//     let sum = a + b;
//     return function(){
//         let sum = a+b;
//         return sum;
//     }
// }

// console.log(add()())

// // what is a pure function?

// // A pure function is a function  where the return value is determined by its arguments without any side effects.

// let numbers = [];
// const impureAddNumber = (number) => {
//     number.push(number);
// }


// const pureAddNumber = (number) => 
// (numberArray) => numberArray.concat([number]);

// impureAddNumber(2);
// console.log(numbers)

// console.log(pureAddNumber(7)(numbers));
// console.log(numbers);

// // What are closure?

// // It is an inner function that has access to the outer or enclosing function's variable.
// // The closure has three scope chains

// // - own scope where variables defined between curly brackets
// // - outer function's variable
// // - global variables

// let a = 6;
// function welcome(name){
//     var greeting = function(message){
//         console.log(message+ "  "+ name);
//     }
//     return greeting;
// }

// welcome("john")("Hello");

// //  What is memoization?

// // Memoization is a programming technique which attempts to increase a function's performance by caching its previously computed results.

// const memoizAddition = () => {
//     let cache = {};

//     return (value) => {
//         if(value in cache){
//             console.log("Fetching from cache")
//             return cache[value]
//         }else{
//             console.log("Calculating result");
//             let result = value + 10;
//             cache[value] = result;
//             return result;
//         }
//     }
// }

// let addition = memoizAddition()
// console.log(addition(15))
// console.log(addition(15))

// // what is the rest and spread operator in js

// // The rest operator is denoted by three dots(...) and allows to pass an infinite number of arguments to a function as an array.

// function add(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total;
// }

// console.log(add(2,3,4,5,6,7,8))

// // The spread operator is also denoted by three dots(...) but it allows us to expand an array or object.

// let array1 = ["red","green","blue"];
// let array2 = ["yellow","black","pink"];

// let combinedarray = [...array1, ...array2];
// console.log(...array1);

// // How do you check if a key exist in an object?

// // 1. using in operator
// // syntax :  "key" in objname

// const person = {
//     name:"john",
//     age:32,
//     city:"New York"
// }

// console.log("name" in person);  // true

// // 2. using hasOwnProperty method
// // syntax : objname.hasOwnProperty("key")

// person.hasOwnProperty("city");

// // What is object.values and object.entries>

// const person1 = {
//     name:"john",
//     age:32,
//     city:"New York"
// }

// let values = Object.values(person);

// let pairs = Object.entries(person);
// for(let pair of pairs){
//     console.log(pair[0]+"  "+pair[1])
// }

// // 8. How do you copy properties from one object to another?

// Object.assign(target, ...source)

// const target = {a:1,b:2}
// const source = {b:3, c:4}

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// console.log(returnedTarget);

// // What is currying function?

// // Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

// const multiArgFunc = (a,b,c) => a+b+c;
// console.log(multiArgFunc(2,2,3));

// const curryUnaryFunc = (a) => (b) => (c) => a+b+c;

// console.log(curryUnaryFunc(1))  // returns a function b => c => 1+b+c
// console.log(curryUnaryFunc(1)(2)) // return a function c => 3+c
// console.log(curryUnaryFunc(1)(2)(4)) // return 3+4 =7



// // event bubling

// // Event bubbling is the propogation technique in which an event triggered on an element propogates up through its parent element.

// // event.stopPropogation();

// // Event capturing
// // Event capturing is opposite of event bubbling, in which an event triggered on an element propogates down to its child elements.

// const container = document.getElementById("container")
// container.addEventListener('click', function(e) {
//     console.log("container clicked");
// }, true);


// // event delegation
// // It is technique in which you attach a single event handler to a element instead of attaching individual handlers to multiple child elements.
// const list = document.getElementById("list")

// list.addEventListener('click', function(event) {
//     if(event.target.tagName === 'LI'){
//         console.assert.og(event.target.textContent)
//     }
// })


export const add = (a,b) => a+b;
export const sub = (a,b) => a-b;