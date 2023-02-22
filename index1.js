window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("load", function(){
var elmnt = document.body.offsetWidth;
if(elmnt < 700){
    alert("Warning. The website isn't responsive. Turn on computer website option on your phone, or set your browser min-width to 750px");
}
})