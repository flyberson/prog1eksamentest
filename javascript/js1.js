
$(document).ready(function () {
    setInterval(function(){ getdata(); },60*60000);//60*60000 hour
    getdata();


});
function reload_page()
{


}
function getdata(){
   $("#table1 tr").remove();
    var Json= "http://www.odaa.dk/api/action/datastore_search?resource_id=2a82a145-0195-4081-a13c-b0e587e9b89c";
$("#table1").append("<tr><th>date</th> <th> garage</th> <th>spaces</th></tr>");
    $.getJSON(Json,function (data) {

        for (var i= 0; i<data.result.records.length; i++){

            var garage = data.result.records[i].garageCode;

            var date = data.result.records[i].date;

            var totalspaces= data.result.records[i].totalSpaces;

            var vehiclecount = data.result.records[i].vehicleCount;

            var openspaces= totalspaces-vehiclecount;

            $("#table1").append("<tr><td>"+date+"</td>"+"<td>"+garage+"</td>"+"<td>"+openspaces+"</td></tr>")
        }

    });
}
