// const { log } = require("console");



const firstPage = document.querySelector(".firstPage-container");
const secondPage = document.querySelector(".secondPage-container");
const buttonReserv = document.querySelector(".Rerv-btn");
const completeReserv = document.querySelector(".complete-reserv");
const reservedDate= document.querySelector(".showreservedtime");
const PartySize = document.querySelector("#guest-number");
const gTc = document.querySelector(".gTc-container");
const buttonNext = document.querySelector(".Completed");
const ReservInfo = document.querySelector(".reserved-time");
const finalbutton = document.querySelector(".confirm");

const openBtn = document.querySelector(".fa-solid.fa-bars");
const closeBTn = document.querySelector(".fa-solid.fa-x");
const dropMenu = document.querySelector(".drop-down");
const openMenu = document.querySelector(".open-buttons");
const closeMenu = document.querySelector(".close-buttons");


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


const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const daysContainer = document.querySelector("#calander-choose"); 
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);
  // const monthDays = document.querySelector(".dates-calendar");

  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;

  const today = new Date();
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

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    const prevDate = new Date(date.getFullYear(), date.getMonth() - 1, prevLastDay - x + 1);
    days += `<option class="prev-date">${months[prevDate.getMonth()]} ${prevDate.getDate()}, ${prevDate.getFullYear()}</option>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
    if (
      currentDate.getDate() === today.getDate() &&
      currentDate.getMonth() === today.getMonth()
    ) {
      days += `<option class="today">${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}</option>`;
    } else {
      days += `<option>${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}</option>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    const nextDate = new Date(date.getFullYear(), date.getMonth() + 1, j);
    days += `<option class="next-date">${months[nextDate.getMonth()]} ${nextDate.getDate()}, ${nextDate.getFullYear()}</option>`;
  }

  daysContainer.innerHTML= days;
};
renderCalendar();

//time slots 
let times= [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

let reservedTimes = [
];

const selectElement = document.querySelector(".available-time");
for (let i = 0; i < times.length; i++) {
  const option = document.createElement("option");
  option.textContent = times[i];
  selectElement.appendChild(option);
}

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
   document.querySelector(".complete-reserv");

  if (queryString.length > 0) {
 const firstname = document.querySelector(".showreservedtime");
  urlParams.forEach(function (value, key) {
    if (key === "First Name" || key === "Last Name" || key === "Email" || key === "Phone" || key === "Party Size" || key === "Date" || key === "Time") {
      

      const myReservations = `<li>${key}: ${value}</li>`;
      console.log(myReservations);
      reservedDate.innerHTML += myReservations;  
      
    }}
  )}
 
  buttonReserv.addEventListener("click",()=>{
    secondPage.style.display ="none";
    ReservInfo.style.display ="block";
    
  })

  //   finalbutton.addEventListener("click",()=>{

    
  // })
