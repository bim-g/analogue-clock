let hour =$("hour");
let minute =$("minute");
let second =$("second");
let date= new Date();
setInterval(function(){
    date=new Date();
    let sec=date.getSeconds()*6;
    let min=date.getMinutes()*6;
    let hr=date.getHours()*30+Math.round(min/12);
    second.style.transform="rotate("+sec+"deg)";
    minute.style.transform="rotate("+min+"deg)";
    hour.style.transform="rotate("+hr+"deg)";
},1000);
function $(id){return document.getElementById(id);}