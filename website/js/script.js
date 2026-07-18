// Download year automatically

document.getElementById("year").textContent =
new Date().getFullYear();



// Scroll Button

const scrollBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.style.display="flex";

}

else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
