// globalnav
$(function(){
   var scrollpos;
 
   $("#sp_nav .inner").on("click", function() {
     console.log("a");
     $(this).toggleClass("open").next().slideToggle();
     $(".detail").toggle("block");
     $(".innermenu").toggleClass("close");
     $('body').toggleClass('fixed');
     $("a.pcmenu").click(function(event){
       event.preventDefault();
     });
   });
 
   $(".globalnav").each(function() {
     var accordion = $(this);
     $(this).find("a.pcmenu").click(function() {
       var targetContentWrap = $(this).next(".close");
       if ( targetContentWrap.css("display") === "none" ) {
         accordion.find(".close").slideUp();
       }
       targetContentWrap.slideToggle();
     });
   });
 
 });
 
 // sitetop jcpwm
 $(function(){
     $("#moreBtn").click(function(){
         var switch_flg = $(this).hasClass("close");
         if (switch_flg) {
             $("#moreBtn img").attr('src', '../images/sitetop/sp/icon_open.png');
             $(this).removeClass("close");
             $(".sp_jcpwm ul li:nth-child(n+2)").fadeOut(200);
             $(".listbtn").fadeOut(200);
         }else{
             $("#moreBtn img").attr('src', '../images/sitetop/sp/icon_close.png');
             $(this).addClass("close");
             $(".sp_jcpwm ul li:nth-child(n+2)").css('display','none').fadeIn(500);
             $(".listbtn").css('display','none').fadeIn(500);
         }
     });
 });