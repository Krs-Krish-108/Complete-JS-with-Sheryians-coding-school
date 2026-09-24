let select = document.querySelector("select");
let h2 = document.querySelector("h2");

select.addEventListener("change", function(e){
    // console.log(e.target.value);
    h2.textContent = `Device: ${e.target.value}`;
});
