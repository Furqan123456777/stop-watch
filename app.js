var hours = document.getElementById("hour");
var minute = document.getElementById("min");
var second = document.getElementById("sec");
var millisecond = document.getElementById("msec");

var interval;
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

function StartTimer(){
     msec++;
     millisecond.innerHTML = msec;
     if(msec >= 100){
        sec++;
        second.innerHTML = sec;
        msec = 0;
     }

     else if(sec  >= 60){
        min++;
        minute.innerHTML = min;
        sec = 0;
     }
     else if(min >= 60){ 
        hour++;
        hours.innerHTML = hour;
        min = 0 ;
     }

    }
    
 
    function start(){
       interval = setInterval(StartTimer, 10);
       document.getElementById( "start" ).disabled= true;
       document.getElementById( "stop" ).disabled= false;
    }


    function stop(){
        clearInterval (interval);
        document.getElementById("stop").disabled= true;
        document.getElementById("start").disabled=false
    }

    function reset(){
 hour = 0;
 min = 0;
 sec = 0;
 msec = 0;
 hours.innerHTML = hour;
 minute.innerHTML = min;
 second.innerHTML = sec;
 millisecond.innerHTML = msec;
 stop();



    }






    

