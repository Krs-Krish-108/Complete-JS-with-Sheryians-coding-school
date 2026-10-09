//= Object Oriented Programming 
// object and instances

let form1 = document.querySelector('#form1');
let form2 = document.querySelector('#form2');
let user1 = document.querySelector('#user1');
let user2 = document.querySelector('#user2');
let chat = document.querySelector('.chats');

function CreatePencil(name, color, qty, company, align){
    this.name = name,
    this.color = color,
    this.qty = qty,
    this.company = company
    this.write = function(text){
        let p = document.createElement("p");
        p.style.fontSize="10px";
        p.style.textAlign= align;
        p.textContent = `[${name}:] ${text}`;
        p.style.color=color;
        chat.appendChild(p)
    }
}

let Pencil1 = new CreatePencil("Himu", "red", 10, "Domes", "left");
let Pencil2 = new CreatePencil("Abi", "blue", 20, "Nataraj", "right");


form1.addEventListener("submit", function(e){
    e.preventDefault();
    Pencil1.write(user1.value)
    form1.reset();
});

form2.addEventListener("submit", function(e){
    e.preventDefault();
    Pencil2.write(user2.value)
    form2.reset();
});

