// Sign Up Function
function signUp() {
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert("Account created successfully!");
    } else {
        alert("Please enter both username and password.");
    }
}

document.getElementById("signup-button").addEventListener("click", signUp);

// Login Function
function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if (username && password) {
        if (localStorage.getItem(username) === password) {
            alert("Login successful!");
            // You can redirect the user to a new page after successful login
            // window.location.href = "/homepage.html";
        } else {
            alert("Invalid username or password.");
        }
    } else {
        alert("Please enter both username and password.");
    }
}

document.getElementById("login-button").addEventListener("click", login);
