function openLogin() {
    document.getElementById("overlay").style.display = "block";
    document.querySelector('.login-popup').style.display = "block";
    document.querySelector('.signup-popup').style.display = "none";
}

function openSignup() {
    document.getElementById("overlay").style.display = "block";
    document.querySelector('.signup-popup').style.display = "block";
    document.querySelector('.login-popup').style.display = "none";
}

function closePopups() {
    document.getElementById("overlay").style.display = "none";
    document.querySelector('.login-popup').style.display = "none";
    document.querySelector('.signup-popup').style.display = "none";
}

function switchToSignup() {
    document.querySelector('.login-popup').style.display = "none";
    document.querySelector('.signup-popup').style.display = "block";
}

function switchToLogin() {
    document.querySelector('.signup-popup').style.display = "none";
    document.querySelector('.login-popup').style.display = "block";
}