$(document).ready(function() {
  var carousel = $('#related-products-list').carousel({
    limitPerPage: 3,
    pagination: false,
  });
  
  $('.tabs-menu li a').click(function() {
    $(this).parent().parent().find('li').toggleClass('current');
    $('.tabs-content .tab-content').toggleClass('current');
    return false;
  });
  
});