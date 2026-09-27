let form = document.querySelector('#loginForm');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

form.addEventListener("submit", (dets)=>{
    dets.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 
    document.querySelector('#emailError').textContent="";
    document.querySelector('#passwordError').textContent="";
    
    const emailans =emailRegex.test(email.value);
    const passans = passwordRegex.test(password.value);

    let isvalid = true;
    
    if(!emailans){
        document.querySelector('#emailError').textContent = "Email is Incorrect";  
        isvalid = false;      
    }
    
    if(!passans){
        document.querySelector('#passwordError').textContent = "Password is Incorrect";
        isvalid = false;      
    }

    if(isvalid){
        document.querySelector('#resultMessage').textContent="Everything is correct";      
    }

});

