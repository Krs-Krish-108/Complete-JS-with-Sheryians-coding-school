let h1 = document.querySelector('h1');
let f_name =document.querySelector('.file-name');
let p_bar = document.querySelector('#progressBar');
let p_text= document.querySelector('#progressText');
let d_size=document.querySelector('#downloadedSize');
let d_status = document.querySelector('#status');
let button = document.querySelector('#downloadBtn');

let count =0;
button.addEventListener("click", (e)=>{
    d_status.textContent='Download in progress... ';
    let download=setInterval(()=>{
        if(count<=100){
            p_bar.style.width = `${count}%`;
            p_text.textContent = `${count}%`;
            d_size.textContent = count;
            count++;
        }
        else{
            clearInterval(download);
            h1.textContent = "File Downloaded"
            f_name.textContent = "K.B.P-file.zip";
            d_status.textContent= "Downloading Completed";
            d_status.style.color="green";
            
            button.style.display="none";
        }

    },100);
});