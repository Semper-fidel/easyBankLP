const hamMenu = document.getElementById('hamburger');
let mobNav = document.getElementById('mobileNav');
let navTab = document.querySelectorAll('navTab')
let mobileMenu = mobNav.style.display="none";

hamMenu.onclick = function(){
    if(mobNav.style.display === "none"){
        mobNav.style.display = "flex";
        hamMenu.src = "images/icon-close.svg";
    }

    else{
        hamMenu.src = "images/icon-hamburger.svg";
           mobNav.style.display = "none";
    }
 }


 
navTab.forEach((button) => {
  button.addEventListener("click", () => {
    mobNav.src = "Images folder/icon-hamburger copy.svg";
    mobNav.style.display = "none";
  });
});
