const mode=document.getElementById("mode");
const dark=()=>{
    var a=document.body.classList.toggle("dark-mode");
    var b=document.getElementById("title").classList.toggle("title-mode");
    var face=document.getElementById("face").classList.toggle("android-mode");
    var reye=document.getElementById("reye").classList.toggle("blink-mode");
    var leye=document.getElementById("leye").classList.toggle("blink-mode");
    var rb=document.getElementById("rb").classList.toggle("blink-mode");
    var lb=document.getElementById("lb").classList.toggle("blink-mode");
    var bodly=document.getElementById("bodly").classList.toggle("android-mode");
    var rl=document.getElementById("rl").classList.toggle("android-mode");
    var ll=document.getElementById("ll").classList.toggle("android-mode");
    var rh=document.getElementById("rh").classList.toggle("android-mode");
    var lh=document.getElementById("lh").classList.toggle("android-mode");
    var ra=document.getElementById("ra").classList.toggle("antena-mode");
    var la=document.getElementById("la").classList.toggle("antena-mode");
}
mode.addEventListener("click",dark);