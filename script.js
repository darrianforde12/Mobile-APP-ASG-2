function saveTask(){
    var task = document.getElementById("newTask").value;
    localStorage.setItem("task", task);
    alert("Task has now been saved");
}
function showTask(){
    var task = localStorage.getItem("task");

    document.getElementById("task").innerHTML = "task " + task;
}

function showLocation(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    alert("latitude : " + latitude + "Longitude: " + longitude) ; 
}

function errorHandler(err){
    if(err.code == 1){
    alert("Error: Access is denied! ")
    }
    else if(err.code == 2){
        alert("Error: Position is unavailable!");
    }
}
function getLocation(){ 
    if(navigator.geolocation){
        var options = {timeout:60000};
        navigator.geolocation.getCurrentPosition(showLocation, errorHandler,options);
    }else {
        alert("Sorry, the browser does not support the function getLocation ")
    }
}