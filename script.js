$(document).ready(function(){
    $("button").click(function(){
      $("#side_bar").hide();
      $("#intro").animate({width:"100%",left:"0%"});

    });
    $("#intro span img").click(
        function(){
$("#side_bar").show();
$("#intro").animate({width:"85%",left:"15.5%"});
        }
    );
    $("#skills ul").hover(function(){
        var i;
        var wid=[300,400,500,500,500];
        for(i=0;i<5;i++)
        $(`.slider${i+1}`).animate({width: wid[i]},"slow");
      });
  });

