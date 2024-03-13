//for content loading
const loader_page=document.getElementById("LOADER");
const window5 = document.getElementById("window5");

window5.style.display="none";
document.addEventListener("DOMContentLoaded", fadeLoader);

function fadeLoader(){
    

    loader_page.style.animation="fade-out 1.5s linear 1.5s forwards";

    setTimeout(()=>{window5.style.display="flex";},3000);
    // setTimeout(function(){document.body.removeChild(loader_page);},3000)
    
}
