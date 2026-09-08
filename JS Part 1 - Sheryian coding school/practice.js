//. for loop and while loop practice questions

//= Question ------ ask the user for a number and print whether each number from 1 to that number is even or odd

// let userinp = prompt("Enter a number: ");

// for (i=0; i<userinp; i++){
//     if(i%2!=0){
//         console.log(`${i} is odd number`);
//     }
//     else{
//         console.log(`${i} is even  number`);
//     }
// }
//=------------------------------------------------------------------------------------------------------------------

//. Functions
//: Parameters and arguments

// function add(v1=1, v2=3){   //Default parameters --- here we set a default parameter, in case an argument isn't passed it uses the default parameter 
//     console.log(v1 + v2);
// }

//: Practice questions
//= use rest parameters to accept any number of parameter and return its total

// function scores(...scrs){
//     let total = 0;
//     scrs.forEach(function(value){
//         total = total + value;
//     });
//     return total;
// }

// console.log(scores(12,23,31,17));


//= fix the given function using early return

//? given function
// function checkage(age){
//     if (age<18){
//         console.log("not allowed");
//     }else{
//         console.log("allowed");
//     }
// }

//? solution using early return 
// function checkage(age){
//     if(age<18) return "not allowed";

//     return "allowed";
// };

// console.log(checkage(25));


//= just another question -- kya lock karega

// function outer(){
//     let count = 0 ;
//     return function(){
//         count++;
//         console.log(count);
//     };  
// };

// const counter = outer()
// counter()
// counter()


//= BMI calculator

// function bmi(w,h){
//     let totalbmi = w / (h * h);
//     return totalbmi;
// }

// let weight = Number(prompt("Enter the weight in kg"));
// let height = Number(prompt("Enter the height in m"));

// console.log(bmi(weight, height).toFixed(2));

//= create a reusable discount calculator using H.O.F

// function discal (price, discount){
//     return ((discount/100)*price);
// }

// let price = number(prompt("Enter the item price: "));
// let discount = number(prompt("Enter the discount available: "));

// console.log(discal(function(){

// }));


//= build a counter using closure

// function counter(){
//     let count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }

// let c = counter()
// c()
// c()
// c()
// c()

// let d = counter()
// d()

// c()


//= create a pure function to transform a value

//=-----------------------------------------------------------------------------------------------------------------------------------

//. Arrays
//: forEach function

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (val) {
//     console.log(val);
// });

//: map function

//: filter function

//:reduce function

//: find function 
// let arr = [
//     {id:1, value:1},
//     {id:2, value:2},
//     {id:3, value:1},
// ]

// let newarr = arr.find(function(val){
//     return val.value ===1;
// })

//= Q: create an array with 3 fruits and print the 2nd fruit

// let fruits = ["mango", "apple", "banana"]
// console.log(fruits[2])

//= Q: Add "mango" at the end and "pineapple" in the begining in array created above
// let fruits = ["mango", "apple", "banana"]

// fruits.push("grape")
// fruits.unshift("pineapple")
// console.log(fruits);

//= Q: Replace "banana" with "kiwi" in array above
// let fruits = ["mango", "apple", "banana"]

// fruits.pop()
// fruits.push("kiwi")
// console.log(fruits);

//= Q: What is the difference between .push() and .unshift() --------> Theory question


//= Q: Remove the last item form this array below
// let nums = [1, 2, 3, 4, 5]

// nums.pop();
// console.log(nums);


//= Q: Insert "Red" and "Blue" at index 1 of fruits array created above without removing anything
// let fruits = ["mango", "apple", "banana"]

// fruits.splice(1, 0, "red", "blue");
// console.log(fruits);

//= Q: Extract only the middle 3 elements of the array
// let nums = [1, 2, 3, 4, 5];

// let newarr = nums.slice(1,4);
// console.log(newarr);

//: if you want to extract values from specific indexes and store them in variables
// let [,a,b,c,,] = nums
// console.log(a);
// console.log(b);
// console.log(c);


//= Q: Sort this array and then reverse it
// let names = ["Zara", "Arjun", "Mira", "Bhavya"];
// names.sort().reverse();
// console.log(names);