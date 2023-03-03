let x = document.querySelector('.strategy > .container > .inner > .content > .icons > #araj');
let z = document.querySelector('.strategy > .container > .inner > .content > .icons > #het');
let y = document.querySelector('.strategy > .container > .inner > .teamblock');
let t = document.querySelector('.strategy > .container > .inner > #k');


x.addEventListener("click", function(){
    y.style.display = "none";
    k.style.display = "flex";
    if(x.style.color = "transparent"){
        z.style.color = "black"
    }
})

z.addEventListener('click', function(){
    k.style.display = "none";
    y.style.display = "flex"
    
    if(z.style.color = "transparent"){
        x.style.color = "black"
    }
})