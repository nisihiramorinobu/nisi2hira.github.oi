'use strict'
$(function() {

const s4 = document.getElementById('s4');
const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let end = 0;
start.addEventListener('click',() => {
 
  const st = Date.now();
  end = setInterval(() => {
    const ed = Date.now();
    console.log(ed - st);
    const mm = Math.floor((ed - st) / (60 * 1000));
    const ss = Math.floor((ed - st - mm * 60 * 1000) / 1000) ;
    const ms = ed - st - mm * 60 * 1000 - ss * 1000 ;
   console.log(mm);
    timer.textContent = `${mm}:${ss}.${ms}` ;
  }, 1000);
});
stop.addEventListener('click',() => {
  clearInterval(end);
  
});
reset.addEventListener('click',() => {
 

  
});

});