/*
---------------------------------------------------------------------------------------------------
                                    JAVASCRIPT DOCUMENTATION
---------------------------------------------------------------------------------------------------
Description:
This file contains the fishinglog's functions. 

Author:
Spinner Lab's Development Team.

*/
// The fishinglog 

function readFishinglog(userId){

    //var uri = "http://localhost:5050/fishinglog/"+userId;
    
    var uri = "http://pescadores-colombia-api.herokuapp.com/fishinglog/"+userId;
            $.ajax({
            url: uri,
            type: "GET",
            dataType: "JSON",
            cache: false,

            success: function (data, status) {
                $('#myfishinglogs').append("<ul data-role=\"listview\" class=\"ui-listview\">");


                for(var fishinglogItem in data){
                    var title = data[fishinglogItem].title;
                    var place = data[fishinglogItem].place;
                    var date = data[fishinglogItem].date;

                    var new_fishinglog = buildList(title,place,date);
                    
                    $('#myfishinglogs').append(new_fishinglog);
                }
                $('#myfishinglogs').append("</ul>");

            },

            error: function (status) {
                alert('ERROR!!.\nLa aplicacion fallo al intentar recuperar las bitácoras.' + status);
            }
        });
}
function buildList(title,place,date)
{

    var fishinglogItem =
     //"<div id = class = \"fishinglogItem\">" +
                 "<li><a href=\"acura.html\">"+title+place+date+"</a>"+
                "</li>"
    //"</div>"+
    ;

     return fishinglogItem;
}
