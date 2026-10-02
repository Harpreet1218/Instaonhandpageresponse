let a = document.getElementById("thumb");

let b = document.getElementById("remove");

let c = document.querySelector("h5");


let push = 0; 

a.addEventListener("click", function() {
    if (push === 0) {
        c.innerText = "Potential Lover";
        a.innerText = "Stage 1";

       
        push = 1;
    } 
    else if (push === 1) { 
        c.innerText = "Love hogya";
        

        a.innerText = "Stage 2";
        push = 2; 
    } 
    else if (push === 2) {
        c.innerText = "Katt gaya";
        a.innerText = "Another:brother";
       
        push = 0;
    }
});


b.addEventListener("click", function() {
    c.innerText = "Good friend";
    a.innerText = "Thumbs Up";
   
    push = 0;
})