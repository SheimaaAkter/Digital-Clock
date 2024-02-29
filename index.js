const hourE = document.getElementById("hour");
const minuteE = document.getElementById("minutes");
const secondE = document.getElementById("seconds");
const ampmE = document.getElementById("ampm");


function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h = h-12;
        ampm = "PM";
    }
    h = h<10? "0"+ h : h;
    m = m<10? "0"+ m : m;
    s = s<10? "0"+ s : s;

    hourE.innerText = h;
    minuteE.innerText = m;
    secondE.innerText = s;
    ampmE,(innerText = ampm);
setTimeout(()=>{
updateClock();
}, 1000)
}
updateClock();