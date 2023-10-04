 const firstPage = document.querySelector(".firstPage-container");
const secondPage = document.querySelector(".secondPage-container");
const buttonNext = document.querySelector(".next-btn");
const buttonReserv = document.querySelector(".Rerv-btn");
const completeReserv = document.querySelector(".complete-reserv");
const reserveTime = document.querySelector(".available-time");

buttonNext.addEventListener("click", () => {
  secondPage.style.display = "block"; // Show the second page
  firstPage.style.display = "none"; // Hide the first page
});

buttonReserv.addEventListener("click",()=>{
   completeReserv.style.display ="block";

})

const openBtn = document.querySelector(".fa-solid.fa-bars");
const closeBTn = document.querySelector(".fa-solid.fa-x");
const dropMenu = document.querySelector(".drop-down");
const openMenu = document.querySelector(".open-buttons");
const closeMenu = document.querySelector(".close-buttons");
const days = document.querySelector(".dates-calander");




openBtn.addEventListener("click",()=>{
  openBtn.style.display ="none"
  closeMenu.style.display ="block"
  dropMenu.style.display ="block"

})

closeBTn.addEventListener("click",()=>{
  openBtn.style.display ="block"
  closeMenu.style.display ="none"
  dropMenu.style.display ="none"
  
})
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();

const day = daysOfWeek[d.getDay()];
const month = months[d.getMonth()];
const dayNumber = d.getDate();
const year = d.getFullYear();


const lastday = new Date(year,d.getMonth()+1,0).getDate();
const prevLAstday = new Date(year,d.getMonth(),0).getDate();
const lastdayindex = new Date(year,d.getMonth()+1,0).getDay();
const nextday = 7 - lastdayindex - 1 ;
console.log(lastdayindex)

document.querySelector(".year").textContent = `${year}`;
document.querySelector(".date-number").textContent = `${dayNumber}`;
document.querySelector(".month").textContent = `${month}`;
document.querySelector(".date").textContent = `${day}`;
document.querySelector(".current-month").textContent = `${month}`;


let daysof ="";
// for(let x = dayNumber; x>0; x--){
//   daysof+=`<div class="prev">${prevLAstday - x +1}</div>`
// }

for (let i =1; i <= lastday; i++){
  daysof += `<div>${i}</div>`
  
}


for (let j =1; j <= nextday; j++){
  daysof += `<div class="nextday">${j}</div>`
  days.innerHTML = daysof;
}

document.querySelector()
