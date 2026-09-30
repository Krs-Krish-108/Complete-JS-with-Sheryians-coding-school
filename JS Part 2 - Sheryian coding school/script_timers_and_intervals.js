// let time = setInterval(function(){
//     console.log("I m doing great")
//     console.log("yet i m messed-up")
// }, 4000);

let count = 10;

let counter = setInterval(() => {
    if(count>=0){
        console.log(count);
        count--;
    }
}, 3000);