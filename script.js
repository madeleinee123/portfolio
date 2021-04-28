window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    if (document.documentElement.scrollTop <= (vh/2)){
        navbar.style.height = "50vh";
    } else if (document.documentElement.scrollTop <= vh){
        let newH = ((100 -(((vh/2 - document.documentElement.scrollTop)/vh)*-100))- 50);
        if (newH > 8){
            navbar.style.height = newH + "vh";
        }else{
            navbar.style.height = "8vh";
        }
    } else{
        navbar.style.height = "8vh";
    }
    if (document.documentElement.scrollTop >= (5)){
        document.getElementById("footer").style.visibility = "visible";
    }
    if (document.documentElement.scrollTop < (5)){
        document.getElementById("footer").style.visibility = "hidden";
    }
}
