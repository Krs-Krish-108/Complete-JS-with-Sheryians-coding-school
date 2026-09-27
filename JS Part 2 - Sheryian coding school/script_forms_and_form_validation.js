let form  = document.querySelector('form');
let nm = document.querySelector('#name');
let hide = document.querySelector('#hide');

// console.log(nm);

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    
    
    if(nm.value.length<=2){
        hide.style.display = "block";
    }
    else{
        hide.style.display = "none";
    }
});