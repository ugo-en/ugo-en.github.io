document.querySelector("#loginForm").onsubmit = function(){
    event.preventDefault();
    var username = document.getElementsByName("username")[0].value.trim();
    var password = document.getElementsByName("password")[0].value.trim();

    var user = {
        "name": username,
        "email": "",
        "username": "",
        "password": password,
    }
    
    localStorage.setItem("user",JSON.stringify(user));
    window.location = "dashboard.html";
}