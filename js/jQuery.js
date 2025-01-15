$(document).ready(function () {
  // $("p.first").hover(function() {
  //   $(this).hide(1000);
  //   $("p.second").hide(1500);
  // });
  // $("p.second").on("click",function() {
  //   $(this).show();
  //   $("p.first").show();
  // });
  $("a#show-me").click(function () {
    $("p").fadeIn(1000, function () {
      $(".action-title").html("Show P DONE!");
    });
  });
  $("a#hide-me").click(function () {
    $("p").fadeOut(1000, function () {
      $(".action-title").html("Hide P DONE!");
    });
  });
  $("a#toggle-me").click(function () {
    $("p").fadeToggle(1000, function () {
      $(".action-title").text("Toggle P DONE!");
      // if($("p").is(hide)){
      //   $(".action-title").text("Show P DONE!");
      // }else {
      //   $(".action-title").text("Hide P DONE!");
      // }
    });
  });
  $("a#add-class").click(function () {
    $("a").addClass("btn btn-primary");
    $("a").hasClass("btn btn-primary");
  });
});
// $(function () {$("p").hide();});

