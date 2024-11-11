document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username=='Neelam' && password=='Singh') {
        alert("Login successful!");
        window.location.href = "dash.html";
    } else {
        alert("Please fill in both fields.");
    }
});