$(document).ready(function(){
    var screenWidth = $(window).width();

    function moveBrand() {
      var $navbarBrand = $(".navbar-brand");
      $navbarBrand.detach();
      $(".container__main").prepend($navbarBrand);
    }
    function moveSection() {
        var $section1 = $("#section1");
        var $section2 = $("#section2");
        var $section3 = $("#section3");

        $section1.detach();
        $(".list__one").prepend($section1);

        $section2.detach();
        $(".list__two").prepend($section2);

        $section3.detach();
        $(".list__three").prepend($section3);
      }
    if (screenWidth < 767) {
      moveBrand();
      moveSection();
    }
    $(window).resize(function() {
      screenWidth = $(window).width();
      if (screenWidth < 767) {
        moveBrand();
        moveSection();
      } else {
        $(".navbar").prepend($(".navbar-brand"));
        $(".section__show .show__first").prepend($("#section1"));
        $(".section__show .show__second").prepend($("#section2"));
        $(".section__show .show__third").prepend($("#section3"));
      }
    });
  });