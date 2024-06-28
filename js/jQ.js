$(document).ready(function() {
    $("#button1").click(function() {
      var res = $('#demo').text();
      alert(res);
     // console.log(res);
    });
    $("#myButton").click(function(){
         var inputValue = $("#myInput").val();
         alert("The value of the input field is: " + inputValue);
     });
     $("#changeImage").click(function(){
         $("#myImage").attr("src" , "img/icon-multicolor-2.png");
     });

     $(".text_add").click(function(){
        $(".par").append("  yes!");
    });
    $(".text_add1").click(function(){
        $(".par1").prepend("yes!");
    });

    $(".box").click(function(){
$(".box").remove();
    });

    $(".onoff").click(function(){
$(".box1").toggle();
    });

    $("#removeChildren").click(function(){
        $("#myDiv").empty();
    });



    $("#addClass").click(function(){
        $("#myDiv3").addClass("highlight bold");
    });

    $("#removeClass").click(function(){
        $("#myDiv3").removeClass("highlight bold");
    });

    $("#toggleClass").click(function(){
        $("#myDiv3").toggleClass("highlight bold");
    });
 });