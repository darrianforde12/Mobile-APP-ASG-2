
function showLocation(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    alert("latitude : " + latitude + "Longitude: " + longitude) ; 
}

function errorHandler(err){
    if(err.code == 1){
        alert("Error: Access is denied! ")
    } else if(err.code == 2){
        alert("Error: Position is unavailable!");
    }
}

function getLocation(){
    if(navigator.geolocation){
        var options = {timeout:60000};
        navigator.geolocation.getCurrentPosition(showLocation, errorHandler,options);
    } else {
        alert("Sorry, the browser does not support the function getLocation ")
    }
}
$(document).on('click', '#getLocationButton', function() {
    getLocation();
});

function saveTask()
{
var task =document.getElementById("newTask").value;
   //Write value to file
   localStorage.setItem("newTask", task);

   alert("Task has been saved!");
}
function showTask(){
    var task =document.getElementById("newTask").value;
    localStorage.getItem("newTask", task);

    alert(task);
}
