let fileinp = document.querySelector("#fileinp");
let upload = document.querySelector("#Upload");

upload.addEventListener("click", function(){
    fileinp.click();
});

fileinp.addEventListener("change", function(e){
    console.log(e);
    let file = e.target.files[0];
    if (file){
        upload.textContent = e.target.files[0].name;
    }
});