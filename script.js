


const firstPage = document.querySelector(".firstPage-container");
const secondPage = document.querySelector(".secondPage-container");
const buttonReserv = document.querySelector(".Rerv-btn");
const completeReserv = document.querySelector(".complete-reserv");
const reservedDate= document.querySelector(".showreservedtime");
const PartySize = document.querySelector("#guest-number");

// console.log(PartySize.value)
// buttonNext.addEventListener("click", () => {
//   secondPage.style.display = "block"; // Show the second page
//   firstPage.style.display = "none"; // Hide the first page
// });

// buttonReserv.addEventListener("click",()=>{
//    completeReserv.style.display ="block";

// })

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

document.querySelector(".dates-calander");

const date = new Date();
const renderCalander= () => {

  date.setDate(1);
  const monthDays = document.querySelector(".dates-calander");
 
  const lastday = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const prevLastday = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const today = new Date();
  console.log(today);
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
//  document.querySelector(".month").innerHTML = months[date.getMonth()];
 document.querySelector(".datestring").innerHTML = new Date().toDateString();
 document.querySelector(".current-month").innerHTML = months[date.getMonth()];

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastday - x + 1}</div>`;
  }

  for (let i = 1; i <= lastday; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
    
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

  // Get the selected day on the calendar when clicked on
  const daysContainer = document.querySelector(".dates-calander");
  daysContainer.addEventListener("click", (event) => {
    const selectedDay = event.target.textContent;
    
    const SubmiteChoosenDate = `${selectedDay} ${months[date.getMonth()]} ${date.getFullYear()}`
    // console.log(daysContainer);

    const calanderFiller = document.querySelector('.reserved-calander')
    const customerDay = ` Date: ${ SubmiteChoosenDate}`
    reservedDate.append(customerDay)
    // calanderFiller.textContent = SubmiteChoosenDate;
    console.log(SubmiteChoosenDate)
  });
   
 

// Check if the selected time slot was found in the times array 
};


document.querySelector("#prev-year").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalander();
});
document.querySelector("#next-year").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalander();
});

renderCalander();

document.querySelector("#calander-choose").addEventListener("click", () => {
  document.querySelector(".calander-container").style.display = "block";
 
});


document.querySelector(".calander-container").addEventListener("click", () => {
document.querySelector(".calander-container").style.display = "none";
 
});





//time slots 
let times= [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];

let reservedTimes = [

];


// Select the <select> element with the class "available-time"
const selectElement = document.querySelector(".available-time");

// Populate the select dropdown with options
for (let i = 0; i < times.length; i++) {
  const option = document.createElement("option");
  option.textContent = times[i];
  selectElement.appendChild(option);
}

// Add an event listener to the select element to handle changes
selectElement.addEventListener("change", function () {
  // Get the selected option's text
  const selectedTimeSlot = selectElement.options[selectElement.selectedIndex].text;

  // Find the index of the selected time slot in the times array
  const index = times.indexOf(selectedTimeSlot);

  // Check if the selected time slot was found in the times array
  if (index !== -1) {
    // Remove the selected time slot from the times array
    times.splice(index, 1);

    // Push it into the reservedTimes array
    reservedTimes.push(selectedTimeSlot);

    // Log the updated arrays
   
    console.log("Reserved Times:", reservedTimes);
  
  } 

   reservedDate.append(`Time : ${selectedTimeSlot}`)
});

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);


  if (queryString.length > 0) {
    
    
  urlParams.forEach(function (value, key) {
    if (key === "First Name" || key === "Last Name" || key === "Email" || key === "Phone" || key === "partSize") {
      const myReservations = `${key}: ${value}<br>`;
      console.log(myReservations);
      reservedDate.innerHTML += myReservations;  
    }}
  )}
