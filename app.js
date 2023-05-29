function openNav(){
    document.getElementById("myNav").style.width="100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}

//close mobile menu if screen > 780px
window.addEventListener("resize",
function(){
    //if screen > 780 px and menu is displayed ,cell closeNavfunc
if(this.window.innerWidth > 780 &&
    this.document.getElementById("myNav").style.width === "100%"
    ){
        closeNav();
    }

},
true);