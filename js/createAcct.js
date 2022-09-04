document.querySelector("#signupForm").onsubmit = function(){
    event.preventDefault();
    var name = document.getElementsByName("name")[0].value.trim();
    var email = document.getElementsByName("email")[0].value.trim();
    var username = document.getElementsByName("username")[0].value.trim();
    var password = document.getElementsByName("password")[0].value.trim();
    var confirm = document.getElementsByName("confirm")[0].value.trim();

    var user = {
        "name": name,
        "email": email,
        "username": username,
        "password": password,
    }
    
    if (password == confirm){
        localStorage.setItem("user",JSON.stringify(user));
        window.location = "dashboard.html";
    }
    else{
        alert("Passwords don't match!");
    }
}