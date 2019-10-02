$(document).ready(function() {    
    $("#toy-btn").click(function() {
      if($("#toy").is(":hidden")) {
        $("#toy").show();
        $("#toy-btn").addClass("product-link-color");
      }
      if($("#annex").is(":visible")) {
        $("#annex").hide();
        $("#annex-btn").removeClass("product-link-color");
      }
     
    });
    $("#annex-btn").click(function() {
      if($("#annex").is(":hidden")) {
        $("#annex").show();
        $("#annex-btn").addClass("product-link-color");
      }
      if($("#toy").is(":visible")) {
        $("#toy").hide();
        $("#toy-btn").removeClass("product-link-color");
      }
    });
});