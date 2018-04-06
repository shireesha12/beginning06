/*eslint-env browser*/

//STEP 1
/*var month = parseInt(window.prompt("enter month number(1-12)"));
var d = new Date();
var year = d.getFullYear();
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
if (month <= 12) {
   window.console.log(daysInMonth(month,year));    
} else {
     window.alert("you enter wrong month number");
} */

//STEP 2

/*var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date(); 
window.console.log("The current month is " + monthNames[d.getMonth()]);*/


//STEP 3
/*var today = new Date();
if(today.getDay() == 6 || today.getDay() == 0) {
    window.console.log("today is weekend");
} else {
     window.console.log("today is weekday");
}*/
   

//STEP 4
/*var d = new Date();
var today = d.getDay() - 1;
var yesterday = today - 1;
var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
window.console.log("yesterday is:" + weekDays[yesterday]);*/

//STEP 5
/*var d = new Date();
var today = d.getDay() - 1;
var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var firstLetter = weekDays[today]
window.console.log("Today first letter is:" + firstLetter.charAt(0));*/