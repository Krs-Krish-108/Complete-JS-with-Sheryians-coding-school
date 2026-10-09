let form = document.querySelector('form');
let username = document.querySelector('#name');
let role = document.querySelector('#role');
let bio = document.querySelector('#bio');
let profile = document.querySelector('#profile');

let userManager={
    users:[],
    init:function(){
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            this.addUser();
        });
    },
    addUser:function(){
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            profile: profile.value
        });
        form.reset();
        this.renderUI();
    },
    renderUI:function(){
        document.querySelector('.content').innerHTML="";
        this.users.forEach(function(users){
            const article = document.createElement("article");
            const container = document.querySelector('.content');
            

            article.className ="w-52 min-h-56 m-2.5 border-2 border-cyan-400/50 rounded-xl bg-zinc-800 p-4 flex flex-col items-center text-center shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-cyan-400/20";

            // Image container
            const imageDiv = document.createElement("div");

            // Image
            const img = document.createElement("img");

            img.className = "w-20 h-20 rounded-full mb-4 border-4 border-cyan-200 object-cover";
            img.src = users.profile;
            img.alt = "Alex Johnson";
            imageDiv.append(img);

            // Content container
            const contentDiv = document.createElement("div");
            contentDiv.className = "flex flex-col items-center";

            // Name
            const h2 = document.createElement("h2");
            h2.className = "text-lg font-bold font-sans";
            h2.innerText = users.username;

            // Role
            const h4 = document.createElement("h4");
            h4.className = "text-sm font-semibold text-cyan-300";
            h4.innerText = users.role;

            // Description
            const p = document.createElement("p");
            p.className ="mt-3 text-xs leading-relaxed font-mono text-zinc-300";
            p.innerText =users.bio;

            // Build content hierarchy
            contentDiv.append(h2, h4, p);

            // Build article hierarchy
            article.append(imageDiv, contentDiv);

            // Finally adding card to the container
            container.append(article);
        })
    },
    removeUser:function(){

    }
}

userManager.init(); 
