$(document).ready(function() {    
    // $("#toy-btn").click(function() {
    //   if($("#toy").is(":hidden")) {
    //     $("#toy").show();
    //     $("#toy-btn").addClass("product-link-color");
    //   }
    //   if($("#annex").is(":visible")) {
    //     $("#annex").hide();
    //     $("#annex-btn").removeClass("product-link-color");
    //   }
     
    // });
    // $("#annex-btn").click(function() {
    //   if($("#annex").is(":hidden")) {
    //     $("#annex").show();
    //     $("#annex-btn").addClass("product-link-color");
    //   }
    //   if($("#toy").is(":visible")) {
    //     $("#toy").hide();
    //     $("#toy-btn").removeClass("product-link-color");
    //   }
    // });
  switchBox('#annex-btn', '#annex');
  switchBox('#toy-btn', '#toy');
});
function switchBox(btn, box) {
  $(btn).click(function () {
    var boxs = $('.product-area');
    $('.product-area').each(function() {
      $(this).hide();
    });
    $('.product-link-color').each(function() {
      $(this).removeClass("product-link-color");
    });
    
    $(box).show();
    $(btn).addClass("product-link-color");
    $(box).addClass("product-area-a")
  });
}
      // $("#annex").toggle();
      // $("#toy").toggle();
      // $("#toy-btn").addClass("product-link-color");