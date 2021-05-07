const btnPrimary = document.querySelector(".btn-primary");
const btnSecondary = document.querySelector(".btn-secondary");

btnPrimary.addEventListener('click', function(f){
    console.log("Primary button triggered..");
    console.log(f.target);
})

btnSecondary.addEventListener('mouseover', function(f){
    console.log("Secondary button triggered..");
    console.log(f.target.classList);
})


// Some properties of the event key
/*
f.target
f.target.id
f.target.classList
f.type
*/