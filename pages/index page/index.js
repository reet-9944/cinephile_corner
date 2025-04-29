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
function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const scrollAmount = 220;
    let scrollLeft = carousel.scrollLeft + direction * scrollAmount;
    carousel.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
}

document.querySelectorAll('.movies-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        const infoOverlay = box.querySelector('.info-overlay');
        const title = box.getAttribute('data-title');
        const info = box.getAttribute('data-info');
        infoOverlay.innerHTML = `<p>${title}</p><p>${info}</p>`;
    });

    box.addEventListener('mouseout', () => {
        const infoOverlay = box.querySelector('.info-overlay');
        infoOverlay.innerHTML = '';
    });
});
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('dark-mode');
    const movieTitles = document.querySelectorAll('.movie-title');
    const popupInfo = document.querySelectorAll('.popup-info');
    
    movieTitles.forEach((title) => title.classList.toggle('dark-mode'));
    popupInfo.forEach((info) => info.classList.toggle('dark-mode'));

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon-o');
        themeIcon.classList.add('fa-sun-o');
    } else {
        themeIcon.classList.remove('fa-sun-o');
        themeIcon.classList.add('fa-moon-o');
    }

    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.classList.add('dark-mode');
        
        const movieTitles = document.querySelectorAll('.movie-title');
        const popupInfo = document.querySelectorAll('.popup-info');
        
        movieTitles.forEach((title) => title.classList.add('dark-mode'));
        popupInfo.forEach((info) => info.classList.add('dark-mode'));
        themeIcon.classList.remove('fa-moon-o');
        themeIcon.classList.add('fa-sun-o');
    }
});

function handleLogin() {
    const usernameField = document.getElementById('loginUsername');
    const passwordField = document.getElementById('loginPassword');
    
    const username = usernameField.value.trim();
    const password = passwordField.value.trim();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username && password) {
        if (username === storedUsername && password === storedPassword) {
            alert('Login successful!');
            clearFields('login');
        } else {
            alert('Invalid username or password. Please try again.');
            clearFields('login');
        }
    } else {
        alert('Please enter your username and password.');
    }
}
function handleSignup() {
    const usernameField = document.getElementById('signupUsername');
    const emailField = document.getElementById('signupEmail');
    const passwordField = document.getElementById('signupPassword');
    const confirmPasswordField = document.getElementById('signupConfirmPassword');

    const username = usernameField.value;
    const email = emailField.value;
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username && email && password && confirmPassword) {
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password === confirmPassword) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            alert('Signup successful!');
            clearFields('signup');
        } else {
            alert('Passwords do not match.');
            clearFields('signup');
        }
    } else {
        alert('Please fill out all fields.');
    }
}
function clearFields(formType) {
    if (formType === 'login') {
        document.getElementById('loginUsername').value = '';
        clearPasswordField('loginPassword');
    } else if (formType === 'signup') {
        document.getElementById('signupUsername').value = '';
        document.getElementById('signupEmail').value = '';
        clearPasswordField('signupPassword');
        clearPasswordField('signupConfirmPassword');
    }
}

function clearPasswordField(fieldId) {
    const field = document.getElementById(fieldId);
    field.type = 'text';
    field.value = '';
    field.type = 'password';
}

function filterMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const allSections = document.querySelectorAll('section');
    const noResultMessage = document.getElementById('noResultMessage');
    let found = false;

    if (searchInput === "") {
        location.reload();  
        return;
    }

    if (searchInput !== "") {
        document.body.classList.add("searching");
    } else {
        document.body.classList.remove("searching");
    }
}
