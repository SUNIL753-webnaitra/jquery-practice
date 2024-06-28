$(document).ready(function () {
    $('.btn').click(function () {
        $('p').toggle();

    });
    $('.btn').click(function () {
    
        console.log("hello");
        // $('.box').addClass('bg');
        $('.box').toggleClass('bg');
    });
    $('.menu-icon').click(function () {
    
        console.log("hello");
        // $('.box').addClass('bg');
        $('.header').toggleClass('top-menu');
    });
    var header = $("#myHeader");
  
    // Get the offset position of the navbar
    var sticky = header.offset().top;
  
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    $(window).scroll(function() {
      if ($(window).scrollTop() > sticky) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    });
    $('.dowm-icon1').click(function () {
        $('.par1').toggle();

    });
    $('.dowm-icon2').click(function () {
        $('.par2').toggle();

    });
    $('.dowm-icon3').click(function () {
        $('.par3').toggle();

    });

});



// $(document).ready(function() {
//     // Get the header
//     var header = $("#myHeader");
  
//     // Get the offset position of the navbar
//     var sticky = header.offset().top;
  
//     // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
//     $(window).scroll(function() {
//       if ($(window).scrollTop() > sticky) {
//         header.addClass("sticky");
//       } else {
//         header.removeClass("sticky");
//       }
//     });
//   });
  