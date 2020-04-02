$(document).ready(function(){
    $("button").click(function(){
      $("#side_bar").hide();
    });
    $("#intro span img").click(
        function(){
$("#side_bar").show();
        }
    );
    $("#skills ul li").hover(function(){
        var i;
        var wid=[300,400,500,500,500];
        for(i=0;i<5;i++)
        $(`.slider${i+1}`).animate({width: wid[i]},"slow");
      });
  });

