//
function toggleMenu(){
    document.getElementById("navbar").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}
const mybutton = document.getElementById("hamburger");
mybutton.onclick = toggleMenu;
    
//footer js
const today = new Date();
        document.querySelector("footer div span").textContent = today.getFullYear();
        // document.getElementById("lastupdatedate").textContent = document.lastModified;
        const lastModified = new Date(document.lastModified);
        document.getElementById("lastupdatedate").textContent = `${lastModified.getMonth()+1}/${lastModified.getDate()}/${lastModified.getFullYear()}`;
/*
const date = new Date();
document.querySelector("currentdate").textContent = date.getDate();
console.log(date);*/

const datefield = document.querySelector("currentdate");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;
/*const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);*/