// Function to get the current date and time
// function getCurrentDateAndTime() {
//     const dateTime = new Date();
//     return dateTime.toLocaleString();
//   }
  
//   // Target an HTML element to display the current date and time
//   const dateDisplay = document.getElementById("date-container");
  
//   // Set the innerHTML of the element to the current date and time returned by the function
//   dateDisplay.innerHTML = getCurrentDateAndTime();

//   `use strict`;
function refreshTime() {
  const dateDisplay = document.getElementById("date-container");
  const timeDisplay = document.getElementById("live-time");
  const dayDisplay = document.getElementById("live-day");
  // const dateString = new Date().toLocaleDateString();
  const timeString = new Date().toLocaleTimeString();
  const dayString = new Date().getDay();
  const monthString = new Date().getMonth();
  const dateString = new Date().getDate();
  const yearString = new Date().getFullYear();
  // console.log(monthString+"  "+dateString+"  "+yearString)
  const monthArray =["January","February","March","April","May","June","July","August","September","October","November","December"];
  const fullDate = dateString+" - "+monthArray[monthString]+" - "+yearString;
  const dayArray =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  dayDisplay.innerHTML = dayArray[dayString];
  dateDisplay.textContent = fullDate;
  timeDisplay.innerHTML = timeString;
}
  setInterval(refreshTime, 1000);

