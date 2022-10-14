//hamburger menu
function toggleMenu(){
    document.getElementById("navbar").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");
}
const mybutton = document.getElementById("hamburger");
mybutton.onclick = toggleMenu;

//
const cday = new Date();
//const today = Date.now();

// if (cday.getDay() == 4){
//     document.querySelector("header p");
//     pthing.style.display='block';
//     pthing.style.fontSize= "20pt";
// }
   
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();
let day = days[today.getDay()] + ", " + (today.getDate()) + " " + (months[today.getMonth()]) + " " + (today.getFullYear());
//header
        document.querySelector("header div span").textContent = day;   
        document.querySelector("footer div span").textContent = today.getFullYear();
        // document.getElementById("lastupdatedate").textContent = document.lastModified;
        const lastModified = new Date(document.lastModified);
        document.getElementById("lastupdatedate").textContent = document.lastModified;
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