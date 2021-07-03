'use strict';

console.clear();

// sitetop jcpwm
{

  // function tesuto() {
  //   document.getElementById('moreBtn').addEventListener('click', () => {
  //     $("#textBox").css( { 'font-size' : '18px' , 'color' : 'red' });
  //     const i = 0;
  //     console.log(i); 
  //   });

  // }

  // tesuto();
  
$(function(){
  // $('header').load('more.html');
  $("#moreBtn").click(function(){
      var switch_flg = $(this).hasClass("close");
      if (switch_flg) {
          $("#moreBtn img").attr('src', '/re_common/images/sitetop/sp/icon_open.png');
          $(this).removeClass("close");
          $(".sp_jcpwm ul li:nth-child(n+2)").fadeOut(200);
          $(".listbtn").fadeOut(200);
      }else{
          $("#moreBtn img").attr('src', '/re_common/images/sitetop/sp/icon_close.png');
          $(this).addClass("close");
          $(".sp_jcpwm ul li:nth-child(n+2)").css('display','none').fadeIn(500);
          $(".listbtn").css('display','none').fadeIn(500);
      }
  });
});

}