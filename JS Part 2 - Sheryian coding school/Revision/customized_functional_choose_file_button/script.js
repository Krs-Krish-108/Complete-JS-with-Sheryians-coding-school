let input = document.querySelector("input");
let upload = document.querySelector(".upload");


input.addEventListener("change", (e)=>{
    console.log(e.target.files[0].name);
    let file=e.target.files[0];
    if(file){
        upload.textContent = e.target.files[0].name;
    }

});

upload.addEventListener("click", ()=>{
   input.click() 
});


