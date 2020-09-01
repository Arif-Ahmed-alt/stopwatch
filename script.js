
const display=document.querySelector(".displayTime");
const startButton=document.querySelector(".start");
const resetButton=document.querySelector(".reset");
let second=0;
let minute=0;
let hour=0;

let displaySecond=0;
let displayMinute=0;
let displayHour=0;

let interval;
let status=false

startButton.addEventListener("click",function(){

    if(status==false){
        interval=window.setInterval(stopwatch,1000);
        startButton.innerHTML="STOP";
        status=true

    }else{
        window.clearInterval(interval);
        startButton.innerHTML="START";
        status=false
    }
    
})

resetButton.addEventListener("click",function(){

    window.clearInterval(interval);
    status=false
     second=0;
     minute=0;
     hour=0;
    display.innerHTML=`00:00:00`
    startButton.innerHTML="START";

})

function stopwatch(){
    second++;
    
    if(second/60 == 1){
        second=0;
        minute++;
    }
    if(minute/60 ==1){
        minute=0;
        hour++;
    }

    if(second<10){
        displaySecond='0'+second
    }else{
        displaySecond=second
    }
    if(minute<10){
        displayMinute='0'+minute;
    }else{
        displayMinute=minute
    }
    if(hour<10){
        displayHour='0'+hour
    }else{
        displayHour=hour
    }
    display.innerHTML=`${displayHour}:${displayMinute}:${displaySecond}`

}