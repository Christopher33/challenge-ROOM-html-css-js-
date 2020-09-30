
function prevSlide1() {
    let element = document.getElementById("carousel");
    element.style.left = "-100%";

}

function prevSlide2() {
    let element = document.getElementById("carousel");
    element.style.left = "-200%";

}

function prevSlide3() {
    let element = document.getElementById("carousel");
    element.style.left = "0%";

}

function openNav() {
    let element = document.getElementById("nav_mobile_open");
    element.style.display = "flex";
    
    let element2 = document.getElementById("nav_mobile");
    element2.style.display = "none";
}

function blackIsBlack(){
    let element = document.getElementById("nav_mobile_open");
    element.style.display = "none";

    let element2 = document.getElementById("nav_mobile");
    element2.style.display = "flex";
}