// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function(){
//     h1.style.color="red";
// })

// function dblclick(){
//     p.style.color="green";
// }

// let p = document.querySelector("p");
// p.addEventListener("dblclick", dblclick);

// p.removeEventListener("dblclick", dblclick);
//=---------------------------------------------------------------------------------
// let inp = document.querySelector("input");
// inp.addEventListener("input", function(e){
//     // console.log("typed something");
//     // console.log(inp.value);
//     console.log(e);
// });
//=----------------------------------------------------------------------------------
let select = document.querySelector("select");
let device = document.querySelector("#device");

select.addEventListener("change", function(e){
    // console.log(e.target.value);
    // device.textContent=e.target.value;
    // device.textContent = "Device Selected";
    device.textContent = `${e.target.value} Device Selected`;
});


//=---------------------------------------------------------------------------
//. Displaying every key being pressed on the main screen as a background image that can't be selected ---------> Project 1


//=---------------------------------------------------------------------------
//. Creating a customized upload button and making it functional to choose files when clicked -----------------> Project 2