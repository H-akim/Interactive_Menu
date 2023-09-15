var menu = document.getElementById("menu");

var closemenu = document.getElementById("closemenu").addEventListener("click", ()=>{
    menu.style.top = "-100vh";
})

var menu_icon = document.getElementsByClassName("menu_icon");
menu_icon[0].addEventListener("click", ()=>{
    menu.style.top = "17%";
})