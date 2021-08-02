$(function() {
  var topBtn = $('#pageup');
  topBtn.hide();
  //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺�100縺ｫ驕斐＠縺溘ｉ繝懊ち繝ｳ陦ｨ遉ｺ
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励※繝医ャ繝�
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});

$(function() {
  var topBtn = $('.f_pageup p');
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});