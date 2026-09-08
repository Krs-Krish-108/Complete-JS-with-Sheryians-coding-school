//. The DOM - Document Object Model

//: querySelectors, elementSelectors
// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.innerHTML = "kaise hai bhai log";
// h1.hidden = true;


//= Attribute manipulation
//: setAttribute()
// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.google.com");
// console.dir(a);

// let img = document.querySelector("img");
// img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmaX68ZMbrKknKLVfyY0aUhBTlF01f2fmPEmucDYTBQ&s=10");

//: getAttribute()
// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

//: removeAttribute()
// let a = document.querySelector("a");
// console.log(a.removeAttribute("href"));


//= Dynamic DOM Manipulation
//: createElement(); --------> ek naya element add karna
// let h2 = document.createElement('h2');
// h2.textContent = "hello ji kaise ho";
// document.body.append(h2);

//? append() means -------------> kisi element example body ke andar akhri element ye hoga
//? prepend() means ------------> kisi element example body ek andar pehla element ye hoga

//: appendChild();
// let h3 = document.createElement("h3");
// h3.textContent = "or bhaijaan kya haal chal"
// document.querySelector("body").appendChild(h3);

//: removeElement();
// let h2 = document.getElementById("abcd3");
// document.querySelector("body").removeChild(h2);


//= Style updates via. style and classlist(add, remove, toggle)
//: applying style object using style element inside DOM.
// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.style.color = "red";
// h1.style.backgroundColor="pink";

//: applying style using classlist object inside DOM
// let h1 = document.querySelector("h1");
// h1.classList.toggle("hilu");


//= The DOM - Practice questions
//: What is DOM? How does it represents the HTML structure?


//: What does getElementByClassName return? Is it an array ?
// let h1 = document.getElementsByClassName("abcd");
// console.log(h1);
//It returns an HTML collection and not an array.

//: Use querySelectiorAll to select all buttons with class name ".buy-now"


//: Task number 1: Create a new element and append it to the body. Then remove it after 3 seconds.
// let h2 = document.createElement("h2");
// h2.textContent = "hello ji kaise ho";
// document.body.append(h2);
// setTimeout(() => {
//     document.body.removeChild(h2);
// }, 3000);

//: Task number 2: Select the heading of the page by ID and change its text to "Sheryians coding school".
// let h1 = document.querySelector("#h1");
// h1.textContent= "Sheryians coding school";

//: Select all <li> elements and print their text content using loops.
// let li = document.querySelectorAll("li");
// console.log(li.textContent);
// li.forEach((val) =>{
//     console.log(val.textContent);
// });
    

//? same solution using for...in ------------------> for...in return index of the array created and not the values 
// let li = document.querySelectorAll("li");
// for(let ele in li){
//    console.log(li[ele].textContent); 
// }


//? same solution using for...of
// let li = document.querySelectorAll("li");
// for(let ele of li){
//     console.log(ele.textContent);
// }


// : what is the difference between textContent, innerText and innerHTML?
// let li = document.querySelector('li');
// console.log(li.innerHTML);
// console.log(li.innerText);
// console.log(li.textContent);


//: Select a paragraph and replace its content with: 
{
    /* <b>Updated</b> by Javascript */
}
//? we'll use innerHTML to update content rather than using textContent because in case of textContent it will store in it entirely as a sting whereas innerHTML will store an on the string and it will convert the tag and apply it properties

// let p = document.querySelector("p");
// p.innerHTML  = "<b>Updated</b> by Javascript";


//: How do you get src of an image?
// let img = document.querySelector("img");
// console.log(img.getAttribute("src"));

// let img = document.querySelector("img");
// console.log(img.src);


//: What does setAttribute() do?
// let img = document.querySelector("img");
// console.log(img.setAttribute("src", "https://imgs.search.brave.com/_tpWpScRddc0uSw-UfvcNziS_9s8ejShWdsAMoBni_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtcGhvdG8v/Y2xvc2UtdXAtY3V0/ZS1jYXQtaW5kb29y/c18yMy0yMTQ4ODgy/NTg1LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA"));


//? Direct method
// document.querySelector("img").setAttribute("src", "https://imgs.search.brave.com/_tpWpScRddc0uSw-UfvcNziS_9s8ejShWdsAMoBni_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtcGhvdG8v/Y2xvc2UtdXAtY3V0/ZS1jYXQtaW5kb29y/c18yMy0yMTQ4ODgy/NTg1LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA");
//?                                             OR
// document.querySelector("img").src = "https://imgs.search.brave.com/_tpWpScRddc0uSw-UfvcNziS_9s8ejShWdsAMoBni_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtcGhvdG8v/Y2xvc2UtdXAtY3V0/ZS1jYXQtaW5kb29y/c18yMy0yMTQ4ODgy/NTg1LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA";


//? 2nd Method
// console.dir(img);
// img.src = "https://imgs.search.brave.com/_tpWpScRddc0uSw-UfvcNziS_9s8ejShWdsAMoBni_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtcGhvdG8v/Y2xvc2UtdXAtY3V0/ZS1jYXQtaW5kb29y/c18yMy0yMTQ4ODgy/NTg1LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA";


//: Add a title attribute to a div dynamically
// let div = document.querySelector("div").setAttribute("title", "testing zone")


//: What does createElement() do? What's returned ? 
//? ANSWER :- create element helps us create and returns new HTML element/node dynamically that doesn't pre-exists in the code and futher use it as a valid element to add and manipulate attributes.


//: what is the difference between appendClild() and prepend() ? 


// : Can you remove an element using removeChild()?


//: TASK 3: Create a new list item <li>New Task</li> and add it to the end of <ul>
// let li = document.createElement("li");
// li.textContent = "new Task";
// document.querySelector("ul").appendChild(li);

//? 2nd Method
// let li = document.createElement("li");
// let ul = document.querySelector("ul");
// console.log(ul);
// ul.appendChild(li);


//: how do you change the background color of an element
// let h1 = document.querySelector("h1");
// h1.style.backgroundColor= "red";
// h1.style.color="white";


//: What is the difference between classList.add() and classList.toggle() ?
//? ANSWER :-  classList.add() ----> adds a sytle class to an element that has been defined inside our HTML page.
//? ANSWER :-  classList.toggle() ----> Its acts as a compliment, whatever is applied, it reverses it. If class is their it removes it and vice versa


//: Add a highlight class to every item in the list.
// let ul = document.querySelectorAll("ul li:nth-child(2n)");
// ul.forEach(element => {
//    element.classList.toggle("highlight"); 
// });


//: Set the font size of all <p> elements to 18px using .style
// let p= document.querySelectorAll("p");
// p.forEach(element => {
//     element.style.fontSize= "18px";
// });

//=-----------------------------------------------------------------------------------------------------------------------------------