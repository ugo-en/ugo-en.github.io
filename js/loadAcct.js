document.querySelector("#dashboard-body").onload = function(){
    var user = localStorage.getItem("user");

    if (user != null){
        user = JSON.parse(user);
        if (user.name != null && user.name != ""){
            document.querySelector("#userName").innerHTML = "Hello "+user.name+"!<br><br><br>";
        }
    }
};
