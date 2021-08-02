'use strict'

$(function(){

  const smasize = 650;
  const tabsize = 1000;
  let oldwid = 0;
  let newwid = 0;

  window.addEventListener('DOMContentLoaded', function() {

    newwid = window.innerWidth;
    if(newwid <= tabsize) togglea();
    if(newwid <= smasize) toggleb();
    oldwid = newwid; 

    window.addEventListener('resize', function() {

      newwid = window.innerWidth;
      console.log(oldwid + " , " + newwid);
      if(oldwid <= tabsize && newwid > tabsize) togglea();  
      if(oldwid > tabsize && newwid <= tabsize) togglea();
      if(oldwid <= smasize && newwid > smasize) toggleb();  
      if(oldwid > smasize && newwid <= smasize) toggleb();  
      oldwid = newwid; 
    });   
 
  });
 
  $("#mobileBtn").click(function() {

    newwid = window.innerWidth;
    if(newwid <= smasize ) $(".mail").toggle(); 
    if(newwid <= smasize ) $(".font").toggle();

    if(newwid <= tabsize ) $(".search").toggle();  
    if(newwid <= tabsize ) $(".akahata").toggle();  
    if(newwid <= tabsize ) $(".largeNav").toggle(); 
    if(newwid <= tabsize ) $(".middleNav").toggle(); 

  });

  $(".middleNav").click(function(event) {
      event.preventDefault(); 
      $(this).next().slideToggle(); 
  });

  function togglea() {

    $("header").toggleClass('pas').toggleClass('tab');
    $(".largeNav").toggleClass('pc00').toggleClass('mb00');
    $(".middleNav").toggleClass('pc01').toggleClass('mb01');
    $(".smallNav").toggleClass('pc02').toggleClass('mb02');

    $("#mobileBtn").toggle();     
    $(".search").toggle();
    $(".akahata").toggle();
    $(".largeNav").toggle();
    $(".middleNav").toggle();
    $(".mobileOnly").toggle();
  };
  function toggleb() {   
    $("header").toggleClass('tab').toggleClass('mob');
    $("nav.mail").toggle();
    $("nav.font").toggle();
  };



});






