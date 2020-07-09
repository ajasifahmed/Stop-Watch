// function timer()
// {
//     console.log('running...')
// }
// setInterval(timer,1000)

// function timer()
// {
//     alert('server time out\n please refresh the page');
// }
// setTimeout(timer,3000)

// var count=0;
// var interval;

// interval=setInterval(() => {count++;console.log(count)}, 1000);

// setTimeout(function(){clearInterval(interval);alert('timeout')}, 5000);

var min=0;
var sec=0;
var msec=0;
var interval;

var minHeading=document.getElementById('min');
var secHeading=document.getElementById('sec');
var msecHeading=document.getElementById('msec');

function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if(msec>=100)
    {
        sec++;
        secHeading.innerHTML=sec;
        msec=0;
        
    }
    if(sec>=60)
    {
        min++;
        minHeading.innerHTML=min;  
        sec=0; 
    }
}

function start(){
    interval=setInterval(timer,10);
    var btn = document.getElementById('start');
    btn.disabled = true;
    
    
}
function end(){
    clearInterval(interval);
    var btn = document.getElementById('start');
    btn.disabled = false;
}
function reset(){
    document.getElementById('history-text').innerHTML=minHeading.innerHTML+":"+secHeading.innerHTML+":"+msecHeading.innerHTML
    minHeading.innerHTML=0;
    secHeading.innerHTML=0;
    msecHeading.innerHTML=0;
    var btn = document.getElementById('start');
    btn.disabled=false;
    end();
}
