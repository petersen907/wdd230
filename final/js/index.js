function toggleMenu(){
    document.getElementById("navbar").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}
const mybutton = document.getElementById("hamburger");
mybutton.onclick = toggleMenu;

