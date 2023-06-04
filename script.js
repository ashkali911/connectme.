// Sample profile data for demonstration
var profile = {
    fullName: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    picture: "profile-picture.jpg",
    followers: 150
};

// Update the profile section with data
function updateProfile() {
    document.getElementById("full-name").textContent = profile.fullName;
    document.getElementById("username").textContent = "@" + profile.username;
    document.getElementById("email").textContent = "Email: " + profile.email;
    document.getElementById("profile-picture").src = profile.picture;
    document.getElementById("follower-count").textContent = profile.followers;
}

// Edit profile
function editProfile() {
    var newFullName = prompt("Enter your full name", profile.fullName);
    var newUsername = prompt("Enter your username", profile.username);
    var newEmail = prompt("Enter your email", profile.email);

    if (newFullName && newUsername && newEmail) {
        profile.fullName = newFullName;
        profile.username = newUsername;
        profile.email = newEmail;
        updateProfile();
    }
}

document.getElementById("edit-profile-button").addEventListener("click", editProfile);

// Sample data for demonstration
var posts = [
    { id: 1, text: "Hello, ConnectMe!" },
    { id: 2, text: "It's a great day!" }
];

function displayPosts() {
    var postList = document.getElementById("post-list");
    postList.innerHTML = "";

    posts.forEach(function(post) {
        var postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = post.text;
        postList.appendChild(postElement);
    });
}

function addPost() {
    var postText = document.getElementById("post-text").value;
    var postId = posts.length + 1;
    var newPost = { id: postId, text: postText };
    posts.push(newPost);
    displayPosts();
    document.getElementById("post-text").value = "";
}

document.getElementById("post-button").addEventListener("click", addPost);

// Initial display of profile and posts
updateProfile();
displayPosts();
 
