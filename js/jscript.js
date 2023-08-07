(function(){
let menuIcon = document.querySelector(".menu_moblie_block");
let menuBg = document.querySelector(".modal-backdrop");
let menuBlock = document.querySelector(".menu_web_block");
let dropMenu = document.querySelectorAll(".dropdown-menu");

menuIcon.addEventListener("click",function(){
    menuBlock.style.display = "block";
    menuBg.style.display = "block";
    for(var i=0; i<dropMenu.length; i++){
        console.log(i)
        dropMenu[i].style.left= "-100%" ;    
    }
})


let btnClose =document.querySelector(".btn_close")

btnClose.addEventListener("click",function(){
    menuBlock.style.display = "none";
})
})();



//Ajax
