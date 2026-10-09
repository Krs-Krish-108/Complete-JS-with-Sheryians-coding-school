//+ value of "this" keyword in Global scope
// console.log(this);

//+ value of "this" keyword in function scope
// function callmyname(){
//     console.log(this);
// };

// callmyname();

//+ value of "this" keyword inside a method
// let a = {
//     name:"krish",
//     age: 24,
//     about:function(){
//         console.log(this);
//     }
// }
// a.about();




//+ value of "this" keyword in an ES6 function inside a method
// let b = {
//     name:"krish",
//     age: 24,
//     about:function(){
//         let trail1 = ()=>{
//             console.log(this);
//         };
//         trail1();
//     }
// }
// b.about();



//+ value of "this" keyword in an ES5 function inside a method
// let c = {
//     name:"krish",
//     age: 24,
//     about:function(){
//         function trail1(){
//             console.log(this);
//         };

//         trail1();
//     }
// }
// c.about();




//+ value of "this" keyword inside an event handler
// document.querySelector('h1').addEventListener("click", function(){
//     console.log(this);
//     this.style.color="red";
// });


// let obj = {
//     name: "krish",
//     age:24
// } 

// function target(){
    
// }



//+ trial-testings
// let c = {
//     name:"krish",
//     age: 24,
//     about:function(){
//         console.log(this);
//     }
// }
// c.about();
//--------------------------------



let form = document.querySelector('form');



let userManager={
    users:[],
    init:function(){
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            
        });
    },
    addUser:function(){},
    removeUser:function(){}
}

userManager.init(); 
