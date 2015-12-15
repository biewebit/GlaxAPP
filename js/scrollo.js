$(document).on("click", ".flip", function() { 
   var panelId = $(this).data("panelid");
   $("#"+panelId).slideToggle("slow");
});




$(function() { 


      //Enable swiping...
      $(":jqmData(role='page')").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          if (direction == "left") {
                    var nextPage = parseInt($(this).attr("id").split("page")[1]) - 1;
                    if (nextPage === 0) 
                        nextPage = 4;
                    
                    $.mobile.changePage("#page"+nextPage, {
                            transition: "slide",
                            reverse: false
                        });
          }

          if (direction == "right") {
                    var nextPage = parseInt($(this).attr("id").split("page")[1]) +1;
                    if (nextPage === 5) 
                        nextPage = 1;
                    
                    $.mobile.changePage("#page"+nextPage, {
                        transition: "slide",
                        reverse: true
                    });
          }

        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:75,
         allowPageScroll:"vertical"
      });


      

    });


 