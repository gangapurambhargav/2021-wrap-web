let secondsArrow = document.getElementById("seconds");
let minutesArrow = document.getElementById("minutes");
let hoursArrow = document.getElementById("hours");
function timeIt() {
/*first we initialize a date variable which stores the current time object from the browser Date() object.
*/
    let date = new Date();

    /*seconds, here we extract seconds from the date object above and store them in the getSeconds variable.
*/
    let getSeconds = date.getSeconds();

/*Since a circle has 360 degrees we have to multiply the seconds we have by 360 and divide by 60 to get our current second value in degrees 
*/
    let seconds = ((getSeconds/60) * 360);

/*Then we assigned the seconds value in degrees to the rotate which is then assigned to the transform property style DOM manipulation.
*/
    secondsArrow.style.transform = `rotate(${seconds}deg)`;
/*
Now that we have seconds  out of our way the same procedures can be followed for minutes and hours
*/

    //minutes
    let getMinutes = date.getMinutes();
    let minutes = ((getMinutes/60) * 360);
    minutesArrow.style.transform = `rotate(${minutes}deg)`;

    //hours
    let getHours = date.getHours();
    console.log(((getHours - 12) / 12) * 360);

    let hours = (((getHours-12)/12) * 360);
    hoursArrow.style.transform = `rotate(${hours}deg)`;
}
setInterval(timeIt,1);