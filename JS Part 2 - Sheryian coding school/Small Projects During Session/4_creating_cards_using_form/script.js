let form = document.querySelector("form");
let inp = document.querySelectorAll("input");
let description = document.querySelector("textarea");
let container = document.querySelector(".content");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    console.log(inp[0].value);
    console.log(description.value);
    
    
    let card = document.createElement("div");
    card.classList.add("card1");

    let upper_half = document.createElement("div");
    upper_half.classList.add("upper-half");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inp[0].value);


    let hrl = document.createElement("hr");
    hrl.classList.add("hrl");

    let lower_half = document.createElement("div");
    lower_half.classList.add("lower-half");

    let h3 = document.createElement("h3");
    h3.classList.add("name");
    h3.textContent = inp[1].value;

    let h4 = document.createElement("h4");
    h4.classList.add("occupation");
    h4.textContent = inp[2].value;

    let p = document.createElement("p");
    p.classList.add("description");
    p.textContent = description.value;

    profile.appendChild(img);
    upper_half.appendChild(profile);

    lower_half.appendChild(h3);
    lower_half.appendChild(h4);
    lower_half.appendChild(p);

    card.appendChild(upper_half);
    card.appendChild(hrl);
    card.appendChild(lower_half);

    container.appendChild(card);
    
    inp.forEach((input)=>{
        if (input.type !== "submit"){
            inp.value = "";
        }
    });
})
