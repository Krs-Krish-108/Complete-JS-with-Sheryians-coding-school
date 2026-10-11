//+ Constructor Function

// function CreatePencil(name, price, color, company) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
// }

// CreatePencil.prototype.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color=this.color;
//         document.body.append(h1);
//     };

// let pencil1 = new CreatePencil("Pencil1", 10, "red", "natraj");
// let pencil2 = new CreatePencil("Pencil1", 10, "black", "natraj");



//+ Class
//. constructors ko likhne ka fancy tarika


//+ super
class User {
    constructor(name, address, username, email) {        
        this.name = name,
        this.address = address,
        this.username = username,
        this.email = email,
        this.role = "User"
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        document.body.append(h1);
    }

    checkRole(){
        return `your are ${this.role}`;
    }
}

class admin extends User{
    constructor(name, address, username, email){
        super(name, address, username, email);
        this.role="Admin";
    };

    erase(){
        document.querySelectorAll("h1").forEach((elem)=>{
            elem.remove();
        });
    }
}

let u1 = new User("krish", "kerala", "krish2321", "krish@k.k");
let u2 = new User("kirti", "kanakumari", "kirti2321", "kirti@k.k");
let a1= new admin("devansh", "kabul", "dev2321", "dev@k.k");