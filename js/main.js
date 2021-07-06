'use strict'

$(function() {

const narrs = [1,2,3,4,5];
const warrs = [
  "a",
  "b",
  "c",
  "d",
  "e",
];
narrs.forEach(narr => {
  console.log(narr); 
});
warrs.forEach((warr,index) => {
  console.log(`warr ${index}`);
});
function f_a(i) {
  return i + 1000;
}

// document.querySelector('button').addEventListener('click', () => {
   $('button').click(function() {
    $('footer').load('more.html');

    // var parent = document.createElement("div");
    // var child = document.createElement("p");
    // parent.appendChild(child);
    // var span = document.createElement("span");
    
    // child.after(span);
    // $('section').append(parent);
    // console.log(parent.outerHTML);
    // "<div><p></p><span></span></div>"
// document.getElementById ('target').textContent = target.dataset.eigo;
  //  $('#target').text($('#target').data('eigo'));

// const li = document.createElement('li');
// li.textContent = 'item2';
  //  let li = $('<li>').text('item2');

// document.querySelector('ul').appendChild(li);
  //  $('ul').append(li);
  
    const copy1 = document.querySelector('ul').cloneNode(true); //子要素込みで
      //  const copy1 =  $('ul').clone(true);
console.log(copy1);
// jQuery はtrue,falseのがちがう

  document.querySelector('section').insertBefore(copy1,document.querySelector('ul'));
    // $('ul > li:eq(2)').before(copy1);  
    // copy1.insertBefore($('ul > li:eq(2)'));

  //  const copy2 = document.querySelectorAll('li')[0].cloneNode(false); 
//       const copy2 =  $('ul > li:eq(0)').clone(false);
// console.log(copy2);

  //  document.querySelector('ul').insertBefore(copy2,items[1]);
      // $('ul > li:eq(1)').before(copy2);  
      // $('ul > li:eq(1)').after(copy2); 
      // copy2.insertBefore($('ul > li:eq(1)')) ;
      // copy2.insertAfter($('ul > li:eq(1)')) ;

});




}); 