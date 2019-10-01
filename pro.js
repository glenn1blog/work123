$(document).ready(function() {    
    $(".test1").click(function() {
      $(".test2").slideToggle();
      $( "p" ).toggle();
    });
  });