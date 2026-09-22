// let p = document.querySelector("p");

// function dblclick (){
//     p.style.color = "yellow";
// }

// p.addEventListener("dblclick", dblclick);
// p.removeEventListener("dblclick", dblclick);



let inp = document.querySelector("input");

inp.addEventListener("input", function(dets){
    console.log(dets.target.value);
});